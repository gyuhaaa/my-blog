import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const allPosts = getSortedPostsData();

  return (
    <section className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">블로그</h1>
      <ul>
        {allPosts.map(({ id, date, title, thumbnail }) => (
          <li key={id} className="mb-4">
            {thumbnail && (
              <Image
                src={thumbnail}
                alt={title}
                className="w-160 h-40 object-cover rounded-md"
                unoptimized
              />
            )}
            <div>
              <Link
                href={`/blog/${id}`}
                className="text-2xl font-medium text-blue-500 hover:underline"
              >
                {title}
              </Link>
              <br />
              <small className="text-gray-500">{date}</small>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
