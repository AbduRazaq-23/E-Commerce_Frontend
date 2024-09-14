import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useAddCommentsMutation,
} from "../../app/api/productsSlice";

const ProductDetails = () => {
  const [rating, setRating] = useState(0); // Current selected rating
  const [hover, setHover] = useState(null);
  console.log(rating);

  const { productId } = useParams();
  const { data } = useGetProductByIdQuery(productId);
  const [product, setProduct] = useState(null);

  const [comment, setComment] = useState("");
  const [showComment, setShowComment] = useState(false);
  const [addComments] = useAddCommentsMutation();
  const [newComment, setNewComment] = useState();

  useEffect(() => {
    try {
      data && setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  // show or hide comment
  const ShowComments = () => {
    setShowComment(!showComment);
  };
  // addComment
  const addComment = async () => {
    try {
      const commentData = {
        comment,
      };

      const res = await addComments({ productId, data: commentData }).unwrap();
      setNewComment(res?.data.comments);

      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0C1844]    p-2">
      <div className="w-full h-[50%] md:w-[70%] m-auto  md:flex gap-6 text-gray-200 border border-[#262e52] rounded-lg overflow-hidden">
        <img className="h-80 w-full md:w-60 " src={product?.image} alt="img" />
        <ul>
          <li>name: {product?.name}</li>
          <li>desc: {product?.description}</li>
          <li>$: {product?.price}</li>
          <li>brand: {product?.brand}</li>
          <li>available: {product?.countInStock}</li>
          <li>quantity: {product?.quantity}</li>

          <ul className="flex gap-1 items-center">
            {/* /////////////////////////////////// */}
            <div className="flex">
              {[...Array(5)].map((_, index) => {
                const starRating = index + 1;
                return (
                  <button
                    key={starRating}
                    type="button"
                    className={`text-3xl cursor-pointer ${
                      starRating <= (hover || rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    onClick={() => setRating(starRating)}
                    onMouseEnter={() => setHover(starRating)}
                    onMouseLeave={() => setHover(null)}
                  >
                    <FaRegStar />
                  </button>
                );
              })}
            </div>{" "}
            {/* //////////////// */}
            <li className="text-sm">rating: {product?.rating}</li>
          </ul>
        </ul>
        <button>orderNow</button>
      </div>

      {/* comments section  */}
      <div className="text-gray-200 w-full md:w-[70%] m-auto border border-[#262e52] rounded-lg">
        {/* add comments  */}
        <div className="m-5 flex border border-[#262e52] rounded-lg overflow-hidden">
          <input
            className="w-full p-2  bg-[#0C1844] focus:outline-none "
            type="text"
            placeholder="add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="p-2" onClick={addComment}>
            post
          </button>
        </div>

        {/* show all comments  */}
        <div className="mx-5 border border-[#262e52] p-2 rounded-lg overflow-hidden ">
          <button className="underline mb-2" onClick={ShowComments}>
            {!showComment ? "show more..." : "hide..."}
          </button>
          <p className="text-sm">comments.{product?.numComments}</p>
          {showComment ? (
            <>
              {newComment
                ? [...(newComment || [])]
                    .sort(
                      (a, b) => new Date(b.createdAt) - new Date(a.createdAt) // Sorting by newest first
                    )
                    .map((com) => (
                      <div
                        className="border border-[#262e52] rounded-lg px-1 text-sm"
                        key={com._id}
                      >
                        <p className="text-xs text-gray-400">{com.name}</p>
                        <p>{com.comment}</p>
                      </div>
                    ))
                : product &&
                  [...(product?.comments || [])]
                    .sort(
                      (a, b) => new Date(b.createdAt) - new Date(a.createdAt) // Sorting by newest first
                    )
                    .map((com) => (
                      <div
                        className="border border-[#262e52] rounded-lg px-1 text-sm"
                        key={com._id}
                      >
                        <p className="text-xs text-gray-400">{com.name}</p>
                        <p>{com.comment}</p>
                      </div>
                    ))}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
