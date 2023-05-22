import Head from "next/head";


const UserIdPage = ({id}: any) => {

  return (
    <div>
    <Head>
      <title>
        NextJs Events
      </title>
      <meta name="description" content="Find a lot fo great events that allow you to evolve.." />
    </Head>
      <h1>
        {id}
      </h1>
    </div>
  )
}


export async function getServerSideProps(context: any) {
  const {params} = context;

  const userId = params.uid;

  return ({
    props: {
      id: 'userId-'+userId,
    }
  })
}

export default UserIdPage