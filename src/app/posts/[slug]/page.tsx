import { getPostDetail } from "@/app/posts/utils";
import Link from "next/link";
import { Suspense } from "react";

const PostDetail = async ({ slug }: { slug: string }) => {
  const content = await getPostDetail(slug);
  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};

const Post: React.FC<{ params: { slug: string } }> = ({ params }) => {
  return (
    <div>
      <button>
        <Link href={"/posts"}>back</Link>
      </button>
      <Suspense fallback={"loading..."}>
        <PostDetail slug={params.slug} />
      </Suspense>
    </div>
  );
};

export default Post;
