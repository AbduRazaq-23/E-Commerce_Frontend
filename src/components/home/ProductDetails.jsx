import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../app/api/productsSlice";

const ProductDetails = () => {
  const { productId } = useParams();
  const { data } = useGetProductByIdQuery(productId);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    try {
      data && setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  }, [data]);
  console.log(product);

  return (
    <div className="w-full min-h-screen bg-[#0C1844]    p-2">
      <div className="w-full h-[50%] md:w-[70%] m-auto  md:flex gap-6 text-gray-200 border border-[#262e52] rounded-lg overflow-hidden">
        <img className="h-80 w-full md:w-60 " src={product?.image} alt="img" />
        <ul>
          <li>{product?.name}</li>
          <li>{product?.description}</li>
          <li>$ {product?.price}</li>
          <li>h</li>
          <li>23</li>
          <li>5</li>
        </ul>
        <ul>
          <li>name</li>
          <li>description</li>
          <li>numRating</li>
          <li>h</li>
          <li>23</li>
          <li>5</li>
        </ul>
      </div>
      <div className="text-gray-200 "> hello</div>
    </div>
  );
};

export default ProductDetails;
