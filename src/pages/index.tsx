import { useRef , useState} from "react";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import Head from "next/head";

const Home = ({products}: any): any => {
  const feedbackRef = useRef();
  const emailRef = useRef();
  const [feedbackList, setFeedbackList] =  useState([]);

  fetch('/api/feedback').then(res => res.json()).then(data => setFeedbackList(data))

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;

    const bodyFetch ={
        email: enteredEmail,
        feedback: enteredFeedback,
      };

    fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyFetch)
    }).then(res => res.json()).then(data => console.log(data))
  }

  return (
    <>
    <Head>
      <title>
        NextJs Events
      </title>
      <meta name="description" content="Find a lot fo great events that allow you to evolve.." />
    </Head>
      <ul>
        {products.map((product: any) => <li key={product.id}><Link href={`/products/${product.id}`} >{product.title}</Link></li>)}
      </ul>
      <form>
        <label htmlFor="email">Your email address</label>
        <input id="email" type="email" ref={emailRef} />
        <label htmlFor="feedback">Your feedback </label>
        <textarea id="feedback" rows="5" type="text" ref={feedbackRef} />
        <button onClick={submitHandler}>Apply</button>
      </form>
      <ul>
        {feedbackList && feedbackList.map((elem: any) => <li key={elem.id}>{elem.feedback}</li>)}
      </ul>
    </>
  )
}

export async function getStaticProps(context: any) {
  const filePath = path.join(process.cwd(), 'src','dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  if (!data) {
    return ({
      redirect: {
        destination: '/no-data'
      }
    })
  }

  if (data.products.length === 0) {
    return ({notFound: true})
  }
  console.log(data.products)

  return ({
    props: {
      products: data.products
    }
  })

}


export default Home
