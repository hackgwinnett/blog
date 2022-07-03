import Link from "next/link";
import UseAnimations from "react-useanimations";
import heart from "react-useanimations/lib/heart";

import { useEffect, useState } from "react";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { hslToHex } from "../utils";
import * as colors from "daisyui/src/colors/themes";

const URL_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [primaryColor, setPrimaryColor] = useState(colors["[data-theme=garden]"]["primary"]);

  const handleLike = () => {
    if (liked) {
      unlikeBlogPost();
    } else {
      likeBlogPost();
    }

    setLiked((prevLiked) => !prevLiked);
  };

  const likeBlogPost = () => {
    console.log("liked");
  };

  const unlikeBlogPost = () => {
    console.log("disliked");
  };

  useEffect(() => {
    setPrimaryColor(colors[`[data-theme=${document.documentElement.dataset.theme || "garden"}]`]["primary"]);
  }, [])


  return (
    <div className="card w-80 sm:w-96 bg-base-100 shadow-xl dark:outline dark:outline-1">
      <div className="card-body">
        <figure className="">
          <img
            src={URL_PREFIX + post.frontmatter.cover_image}
            alt="Blog cover image"
          />
        </figure>
        <div className="bg-base-200 p-2 rounded-md mb-2 flex justify-between items-center">
          Posted on {post.frontmatter.date}
          {/* {liked ? (
            <AiFillHeart className="w-8 h-8 inline text-primary" onClick={handleLike} />
          ) : (
            <AiOutlineHeart className="w-8 h-8 inline text-primary" onClick={handleLike} />
          )} */}
          <UseAnimations
            animation={heart}
            size={36}
            reverse={liked}
            onClick={handleLike}
            strokeColor={"black"}
            fillColor={"red"}
          />
        </div>
        <h3 className="card-title">{post.frontmatter.title}</h3>

        <figcaption className="flex items-center space-x-4">
          <img
            src={
              post.frontmatter.profile_photo
                ? URL_PREFIX + post.frontmatter.profile_photo
                : URL_PREFIX + "/images/profile_photos/default.png"
            }
            alt="Author profile photo"
            className="w-14 h-14 rounded-full object-cover"
          ></img>
          <h4>
            Written by{" "}
            <span className="font-bold">{post.frontmatter.author}</span>
          </h4>
        </figcaption>

        <p>{post.frontmatter.excerpt}</p>

        <Link href={`/posts/${post.rawName}`} passHref>
          <button className="btn btn-primary btn-md">Read More</button>
        </Link>
      </div>
    </div>
  );
}
