import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useAddCommentsMutation,
} from "../../app/api/productsSlice";

const ProductDetails = () => {
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

  const ShowComments = () => {
    setShowComment(!showComment);
  };

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
            {!showComment ? "show more..." : "hide..."}{" "}
          </button>
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
