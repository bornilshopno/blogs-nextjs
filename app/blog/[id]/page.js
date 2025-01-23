import getPost from "@/lib/getPost";


const page = async({params}) => {
    const {id}=params;
 const singlePost=await getPost(id)
    return (
        <div className="bg-grey-400 p-10 rounded-3xl">
           <div className="bg-gray-400 p-10 rounded-xl">
           <h2 className="text-left w-10/12 font-semibold max-w-4xl mx-auto px-5 my-2 bg-white rounded-lg"><span className="text-blue-700">Blog Title :</span>{singlePost.title}</h2>
           <h2 className="text-left w-10/12 font-semibold max-w-4xl mx-auto px-5 py-10 bg-white rounded-2xl"><span className="text-blue-700">Blog Description :</span>{singlePost.body}</h2>
           </div>
        </div>
    );
};

export default page;