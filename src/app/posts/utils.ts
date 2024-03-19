"use server";
import { readFileSync } from "fs";
import { join } from "path";
import { marked } from "marked";

export const getPostDetail = async (slug: string) => {
  return marked(readFileSync(join(process.cwd(), `./posts/${slug}`), "utf-8"));
};
