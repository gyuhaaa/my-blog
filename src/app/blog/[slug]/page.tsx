import { getPostData, getSortedPostsData } from "@/lib/posts";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPostPage({ params }: any) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <article className="max-w-2xl mx-auto p-8">
      {postData.thumbnail && (
        <Image
          src={postData.thumbnail}
          alt={postData.title}
          width={600}
          height={300}
          className="object-cover mb-8 rounded-md"
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{postData.date}</p>
      <div
        className="[&>ol>li]:text-red-500 [&>h1]:text-2xl [&>h1]:font-bold"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
}
