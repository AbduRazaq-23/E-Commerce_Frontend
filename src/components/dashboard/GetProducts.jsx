import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetProductQuery,
  useDeleteProductsMutation,
} from "../../app/api/productsSlice";
import { toast } from "react-toastify";

const GetProducts = () => {
  const [products, setProducts] = useState();
  const { data, isError, isLoading, error } = useGetProductQuery();
  const [productDelete] = useDeleteProductsMutation();

  // get all products
  useEffect(() => {
    try {
      (async () => {
        (await data) && setProducts(data.data);
      })();
    } catch (err) {
      console.error(err);
      toast.error(err);
    }
  }, [data]);

  // handle delete
  const handleDelete = async (id) => {
    try {
      await productDelete(id).unwrap();
      toast.success("delete successfully");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="w-full m-2 p-2 bg-[#F9DBBA] mx-auto rounded-lg text-gray-700 text-sm">
      <h1 className="text-2xl font-bold text-center mb-5">products</h1>
      {isLoading && <h1>Loading...</h1>}
      {isError && <p>{error}</p>}
      {Array.isArray(products) && (
        <div>
          {products.map((product) => (
            <div
              key={product._id}
              className="flex justify-between w-full bg-gray-200 my-1 p-2 rounded-lg"
            >
              <div className="flex gap-4 items-center">
                <img className="w-20 h-20" src={product.image} alt="image" />
                <div className="flex flex-col gap-2">
                  <ul className="flex gap-2">
                    <li className="bg-gray-300 p-1 rounded-lg">
                      name: {product.name}
                    </li>
                    <li className="bg-gray-300 p-1 rounded-lg">
                      dec: {product.description}
                    </li>
                    <li className="bg-gray-300 p-1 rounded-lg">
                      brand: {product.brand}
                    </li>
                    <li className="bg-gray-300 p-1 rounded-lg">
                      category: {product.category.name}
                    </li>
                    <li className="bg-gray-300 p-1 rounded-lg">
                      quantity: {product.quantity}
                    </li>
                  </ul>
                  <ul className="flex gap-2">
                    <li className="bg-gray-300 p-1 rounded-lg">
                      $: {product.price}
                    </li>
                    <li className="bg-gray-300 p-1 rounded-lg">
                      numRating: {product.numRating}
                    </li>
                    <li className="bg-gray-300 p-1 rounded-lg">
                      numReview: {product.numReview}
                    </li>
                    <li className="bg-gray-300 p-1 rounded-lg">reviews</li>
                    <li className="bg-gray-300 p-1 rounded-lg">comment</li>
                  </ul>
                </div>{" "}
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                <Link to={`/dashboard/updateProducts/${product._id}`}>
                  <button className="bg-blue-500 p-1 rounded-lg hover:bg-blue-600">
                    update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 p-1 rounded-lg hover:bg-red-600"
                >
                  delete
                </button>
              </div>
            </div>
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default GetProducts;
