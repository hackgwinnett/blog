import React, { useEffect, useState } from "react";

import { db } from "../firebase/createClient";
import { doc, updateDoc, increment } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";

import { AiOutlineEye } from "react-icons/ai";
import { MuiThemeProvider, createTheme } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f50057",
    },
  }
});

const LikeViewCount = ({ rawName }) => {
  const [liked, setLiked] = useState(false);
  const [value, loading, error] = useDocument(
    doc(db, "posts", rawName),
    {}
  );

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("hgBlogPostsLiked"));
    setLiked(likedPosts && likedPosts.includes(rawName));
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
    const postRef = doc(db, "posts", rawName);

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
      JSON.stringify([...likedPostsArray, rawName])
    );
  };

  const unlikeBlogPost = async () => {
    const postRef = doc(db, "posts", rawName);

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
          storageLikedPosts.filter((item) => item !== rawName)
        )
      );
    }
  };

  return (
    <>
      {!error && value && value.data() ? (
        <div className="flex">
          <div className="flex items-center gap-2">
            <span>
              {loading ? "..." : value.data().likes}{" "}
              {value && value.data().likes === 1 ? "like" : "likes"}
            </span>
            <MuiThemeProvider theme={theme}>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={
                      liked ? (
                        <Favorite color="primary" fontSize="large" />
                      ) : (
                        <FavoriteBorder fontSize="large" htmlColor="black" />
                      )
                    }
                    checkedIcon={
                      !liked ? (
                        <FavoriteBorder fontSize="large" htmlColor="black" />
                      ) : (
                        <Favorite color="primary" fontSize="large" />
                      )
                    }
                    name="checkedH"
                    onClick={handleLike}
                  />
                }
              />
            </MuiThemeProvider>
          </div>
          <div className="flex items-center gap-2">
            <span>
              {loading ? "..." : value.data().views}{" "}
              {value && value.data().views === 1 ? "view" : "views"}
            </span>
            <AiOutlineEye size={36} />
          </div>
        </div>
      ) : (
        <h1></h1>
      )}
    </>
  );
};

export default LikeViewCount;
