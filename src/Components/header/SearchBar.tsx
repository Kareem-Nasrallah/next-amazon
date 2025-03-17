import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useSelector } from "react-redux";
import { ProductType, stateType } from "../../../type";
import Image from "next/image";
import Link from "next/link";

const SearchBar = () => {
  interface AllProductType {
    products: [] | ProductType[];
  }

  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState<[] | ProductType[]>([]);
  const allProducts = useSelector<stateType>(
    (store) => store.store.allProducts.allProducts
  );

  useEffect(() => {
    const filter = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setProducts(filter);
  }, [allProducts, searchText]);
  return (
    <div className={"p-0.5 relative h-10 flex-1 inline-flex"}>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchText(e.target.value)
        }
        value={searchText}
        type="text"
        className="w-full rounded-md h-10 py-1 px-2 text-base text-black border-[3px] border-transparent outline-none placeholder:text-sm focus-visible:border-amazon_yellow"
        placeholder="search next-amazon products"
      />
      <span className="absolute w-12 h-10 bg-amazon_yellow  right-0 flex items-center justify-center text-black text-2xl rounded-tr-md rounded-br-md">
        <HiOutlineSearch />
      </span>
      {searchText && (
        <div className="shadow-lg overflow-y-auto max-h-96 absolute left-0 rounded-lg right-0 top-11 bg-gray-200">
          {products.length > 0 ? (
            <div className="">
              {products.map((product) => (
                <Link
                  onClick={() => setSearchText("")}
                  key={product._id}
                  className="w-full border-b border-b-gray-400 flex items-center gap-4"
                  href={{
                    pathname: `/${product.title}`,
                    query: {
                      productPrice: product._id,
                      brand: product.brand,
                      category: product.category,
                      description: product.description,
                      image: product.image,
                      isNew: product.isNew,
                      oldPrice: product.oldPrice,
                      price: product.price,
                      title: product.title,
                    },
                  }}
                >
                  <div className="flex  text-black w-full justify-around">
                    <Image
                      className="w-24 object-contain"
                      src={product.image}
                      width={96}
                      height={120}
                      alt={product.title}
                    />
                    <div className="py-2">
                      <p className="text-xs text-gray-500">
                        {product.brand}_{product.category}
                      </p>
                      <p className="font-medium text-lg">{product.title}</p>

                      <p className="text-xs text-gray-600 text-justify">
                        {product.description.substring(0, 120)}...
                      </p>
                      <div className="flex text-sm flex-col md:flex-row justify-start md:items-center gap-1">
                        <span className="text-amazon_blue font-semibold">
                          <span className="text-gray-600 font-normal">
                            Price:
                          </span>{" "}
                          ${Number(product.price!).toFixed(2)}
                        </span>
                        <span className="line-through text-gray-600">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="px-2 flex justify-center text-center items-center">
                      <p className="animate-bounce tracking-wide md:block hidden font-semibold text-amazon_blue">
                        save {(product.oldPrice - product.price).toFixed(2)}$
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 flex items-center justify-center py-10">
              <p className="text-lg text-center font-semibold text-amazon_light">
                Nothing is matches with your text. <br /> Please try again...
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
