import Head from "next/head";
import { getData } from "../utils/fetchData";
import ProductItem from "../components/product/ProductItem";
import { useState } from "react";

const Home = (props) => {
  const [products, setProducts] = useState(props.products);

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      {products?.length === 0 ? (
        <h2>No products</h2>
      ) : (
        products?.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await getData("product");
  console.log(res)
  //server side rendering
  return {
    props: {
      products: res.products,
      result: res.result,
    }, // will be passed to page component as props
  };
}

export default Home;
