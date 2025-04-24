import getConfig from "next/config";

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

export default function Blog({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const { publicRuntimeConfig } = getConfig();
  const apiUrl = publicRuntimeConfig.apiUrl;

  const res = await fetch(`${apiUrl}/posts`);
  const posts: BlogPost[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}