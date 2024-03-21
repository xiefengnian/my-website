import { cache, useEffect, useState } from "react";
import { listPosts } from "./listPosts";
import Link from "next/link";
import { readFileSync, readdirSync } from "fs";
import path from "path";
import { Counter } from "./components/Counter";

const getPosts = cache(async () => {
  return await listPosts();
});

export default async function Posts({
  params,
}: {
  params: { list: string[] };
}) {
  const posts = await getPosts();

  return (
    <div>
      <Link href={"/"}>
        <button>back</button>
      </Link>
      <ul>
        {posts.map((item) => {
          return (
            <li key={item}>
              <Link href={`/posts/${item}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
