import fs from "fs/promises";
import path from "path";

const ProductDetailPage = ({filteredProduct}: any) => {

  return (
    <div>
      <h1>
        {filteredProduct.title}
      </h1>
      <p>{filteredProduct.description}</p>
    </div>
  )
}


const getData = async () => {
  const filePath = path.join(process.cwd(), 'src','dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data
}

export async function getStaticProps(context: any) {
  const {params} = context;

  const productId = params.pid

  const data = await getData();

  const product = data?.products.find((elem: any) => elem.id === productId)

  return ({
    props: {
      filteredProduct: product,
    }
  })
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((elem: any) => elem.id);

  const params = ids.map((id: any) => ({params: {pid: id}}))

  return {
    paths: params,
    fallback: true,
  }
}

export default ProductDetailPage