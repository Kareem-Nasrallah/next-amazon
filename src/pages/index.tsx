import Banner from "@/Components/Banner";
import Products from "@/Components/Products";
import { ProductType } from "../../type";

interface PropsType {
  productData: ProductType[];
}
export default function Home({ productData }: PropsType) {
  console.log(productData);
  return (
    <>
      <main className="bg-gray-300">
        <div className="max-w-screen-2xl mx-auto">
          <Banner />
          <div className="relative z-20 md:-mt-20 lgl:-mt-32 xl:-mt-60 mb-10">
            <Products productData={productData} />
          </div>
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
