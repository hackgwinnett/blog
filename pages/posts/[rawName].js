import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

import { useEffect } from "react";
import Link from "next/link";
import Head from 'next/head'
import hljs from "highlight.js";

import LikeViewCount from "../../components/LikeViewCount";

import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../firebase/createClient";

const URL_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  rawName,
  content,
}) {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang === "") {
        lang = "plaintext";
      }
      return hljs.highlight(code, { language: lang }).value;
    },
  });

  const updateViews = async () => {
    const postRef = doc(db, "posts", rawName);

    await updateDoc(postRef, {
      views: increment(1),
    });
  }

  useEffect(() => {
    updateViews();
  }, []);

  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>
      <div className="max-w-4xl">
        <Link href="/">
          <a className="btn dark:btn-accent">Go Back</a>
        </Link>
        <div className="card shadow-xl mt-2 dark:outline dark:outline-2">
          <div className="card-body prose max-w-none">
            <h1 className="text-center">{title}</h1>
            <div className="bg-base-200 p-2 rounded-md flex flex-col items-center md:flex-row md:justify-between">
              Posted on {date}
              <LikeViewCount rawName={rawName} />
            </div>
            <img src={URL_PREFIX + cover_image} alt="" />
            <article className="post-body">
              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      rawName: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { rawName } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", rawName + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      rawName,
      content,
    },
  };
}
