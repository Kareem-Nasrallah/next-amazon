import Banner from "@/Components/Banner";
import Products from "@/Components/Products";

export default function Home({ productData }) {
  console.log(productData);
  return (
    <>
      <main>
        <div className="max-w-screen-2xl mx-auto">
          <Banner />
          <Products />
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
};
