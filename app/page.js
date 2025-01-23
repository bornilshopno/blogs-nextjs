import Button from "@/Components/Button";
import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";


export default async function Home() {
  const post = await getAllPosts()

  return (
    <div className="pt-5 w-10/12 mx-auto" >
      <h2 className="text-xl mb-5">List of Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {post.map((item) =>
          <div key={item.id} className="border-4 border-gray-400 bg-gray-100 rounded-xl p-2 flex flex-col justify-between">

            <h2> {item.title} </h2>
            <Link href={`/blog/${item.id}`} className="text-end mt-5"><Button /></Link>


          </div>)}

      </div>
    </div>
  );
}
