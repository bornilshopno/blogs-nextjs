import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {

    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();

    if (!isUserAuthenticated){
        redirect("/api/auth/login");
    }

    return (
        <div className="p-5">
            <div className="p-5 bg-gray-300">
                <div className="p-5 bg-gray-100">
                    <h2 className="bg-gray-400 text-xl text-blue-500 lg:text-5xl font-bold text-center p-5">Welcome to your Profile!</h2>
                </div>
            </div>

        </div>
    );
};

export default Profile;