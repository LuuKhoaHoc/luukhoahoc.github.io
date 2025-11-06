import Link from "next/link";

import { getBlogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">blog</h1>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <Link
            key={post.slug}
            className="mb-4 flex flex-col space-y-1"
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full flex-col">
              <p className="tracking-tight">{post.metadata.title}</p>
              <p className="h-6 text-xs text-muted-foreground">
                {post.metadata.publishedAt}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
