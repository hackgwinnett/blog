import Link from "next/link";
import { useEffect, useState } from "react";

import { db } from "../firebase/createClient";
import { doc, updateDoc, increment } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";

import UseAnimations from "react-useanimations";
import heart from "react-useanimations/lib/heart";
import { AiOutlineEye } from "react-icons/ai";

const URL_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [value, loading, error] = useDocument(
    doc(db, "posts", post.rawName),
    {}
  );

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("hgBlogPostsLiked"));
    setLiked(likedPosts && likedPosts.includes(post.rawName));
  }, []);

  const handleLike = () => {
    if (liked) {
      unlikeBlogPost();
    } else {
      likeBlogPost();
    }

    setLiked((prevLiked) => !prevLiked);
  };

  const likeBlogPost = async () => {
    const postRef = doc(db, "posts", post.rawName);

    await updateDoc(postRef, {
      likes: increment(1),
    });

    const storageLikedPosts = JSON.parse(
      localStorage.getItem("hgBlogPostsLiked")
    );
    const likedPostsArray =
      storageLikedPosts == null
        ? []
        : typeof storageLikedPosts === "string"
        ? [storageLikedPosts]
        : storageLikedPosts;
    localStorage.setItem(
      "hgBlogPostsLiked",
      JSON.stringify([...likedPostsArray, post.rawName])
    );
  };

  const unlikeBlogPost = async () => {
    const postRef = doc(db, "posts", post.rawName);

    await updateDoc(postRef, {
      likes: increment(-1),
    });

    const storageLikedPosts = JSON.parse(
      localStorage.getItem("hgBlogPostsLiked")
    );
    if (storageLikedPosts) {
      localStorage.setItem(
        "hgBlogPostsLiked",
        JSON.stringify(
          storageLikedPosts.filter((item) => item !== post.rawName)
        )
      );
    }
  };

  return (
    <div className="card w-80 sm:w-96 bg-base-100 shadow-xl dark:outline dark:outline-1">
      <div className="card-body">
        <figure className="">
          <img
            src={URL_PREFIX + post.frontmatter.cover_image}
            alt="Blog cover image"
          />
        </figure>
        <div className="bg-base-200 p-2 rounded-md mb-2 flex items-center justify-between">
          Posted on {post.frontmatter.date}
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

        <div className="p-2 rounded-md mb-2 justify-around flex gap-1 items-center">
          {!error && value && value.data() && (
            <>
              <div className="flex items-center gap-2">
                <span>
                  {loading ? "..." : value.data().likes}{" "}
                  {value && value.data().likes === 1 ? "like" : "likes"}
                </span>
                <UseAnimations
                  animation={heart}
                  size={36}
                  reverse={liked}
                  onClick={handleLike}
                  strokeColor={"black"}
                  fillColor={"red"}
                />
              </div>
              <div className="flex items-center gap-2">
                <span>
                  {loading ? "..." : value.data().views}{" "}
                  {value && value.data().views === 1 ? "view" : "views"}
                </span>
                <AiOutlineEye size={36} />
              </div>
            </>
          )}
        </div>
        <Link href={`/posts/${post.rawName}`} passHref>
          <button className="btn btn-primary btn-md">Read More</button>
        </Link>
      </div>
    </div>
  );
}
