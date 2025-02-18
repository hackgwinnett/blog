import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import hljs from "highlight.js";

import LikeViewCount from "../../components/LikeViewCount";
import { getReadingTime } from "../../utils";

import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../firebase/createClient";

const URL_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  rawName,
  content,
  readingTIme,
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
  };

  const parseMarkdown = (postContent, urlPrefix) => {
    const rawHtml = marked(postContent);
    const newHTML = rawHtml.replace(
      /(<img src=")(.+)(")/g,
      `$1${urlPrefix}$2$3`
    );
    return newHTML;
  };

  useEffect(() => {
    updateViews();
    console.log("url prefix:", URL_PREFIX);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="max-w-4xl">
        <Link href="/">
          <a className="btn dark:btn-accent">Go Back</a>
        </Link>
        <div className="card shadow-xl mt-2 dark:outline dark:outline-2">
          <div className="card-body prose max-w-none">
            <h1 className="text-center">{title}</h1>
            <div className="bg-base-200 p-2 rounded-md flex flex-col items-center md:flex-row md:justify-between">
              Posted on {date} • {readingTIme} min read
              <LikeViewCount rawName={rawName} />
            </div>
            <img src={URL_PREFIX + cover_image} alt="" />
            <article className="post-body">
              <div
                dangerouslySetInnerHTML={{ __html: parseMarkdown(content, URL_PREFIX) }}
              ></div>
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
      readingTIme: getReadingTime(content),
    },
  };
}
