"use client";

import { useEffect, useState } from "react";
import { listPosts } from "./listPosts";
import Link from "next/link";

export default function Posts() {
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    listPosts().then((res) => {
      setList(res);
    });
  }, []);

  return (
    <div>
      <button>
        <Link href={"/"}>back</Link>
      </button>
      <ul>
        {list.map((item) => {
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
