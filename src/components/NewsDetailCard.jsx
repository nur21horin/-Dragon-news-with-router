import React from "react";
import { Link } from "react-router";

const NewsDetailCard = ({ news }) => {
 // console.log(news);
  const { title, image_url, details,category_id } = news;
  return (
    <div className="space-y-5">
      <img
        className="w-full h-[350px] object-cover"
        src={image_url}
        alt=""
      ></img>
      <h2 className="text-2xl">{title}</h2>
      <p>{details}</p>
      <Link  className="btn btn-secondary" to={`/category/${category_id}`}>Back to Category</Link>
    </div>
  );
};

export default NewsDetailCard;
