import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import { getReadingTime, sortByDate } from "../utils";
import Searchbar from "../components/Searchbar";
import { useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/createClient";

export default function Home({ posts }) {
  const [matches, setMatches] = useState(null);

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.ico"/>
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon.ico"/>

        <title>HackGwinnett Blog</title>
      </Head>

      <Searchbar posts={posts} setMatches={setMatches} />

      { matches && <h2 className="font-semibold text-lg mt-4">Search Results</h2> }

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {matches
          ? matches.map((post, index) => !post.frontmatter.draft && <Post key={index} post={post} />)
          : posts.map((post, index) => !post.frontmatter.draft && <Post key={index} post={post} />)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get rawName and frontmatter from posts
  const posts = await Promise.all(files.map(async (filename) => {
    // Create rawName
    const rawName = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    // Firebase stuff
    const docRef = doc(db, "posts", rawName);
    const docSnap = await getDoc(docRef);

    const likes = docSnap.exists() ? docSnap.data().likes ? docSnap.data().likes : 0 : 0;
    const views = docSnap.exists() ? docSnap.data().views ? docSnap.data().views : 0 : 0;

    await setDoc(doc(db, "posts", rawName), {
      ...frontmatter,
      likes,
      views
    });

    return {
      rawName: rawName,
      readingTime: getReadingTime(content),
      frontmatter,
    };
  }));

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

