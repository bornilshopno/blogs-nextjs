import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async() => {

    const {isAuthenticated} = getKindeServerSession();
const isUserAuthenticated = await isAuthenticated();
    const links = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/profile">Profile</Link></li>
    </>

    const linksSmaller = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/profile">Profile</Link></li>
        <li><LoginLink >Sign in</LoginLink></li>
        <li><RegisterLink>Sign up</RegisterLink></li>
        <li><LogoutLink>Log out</LogoutLink></li>

    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                
                <a className="bg-gray-400 font-bold px-5 py-2 text-xl rounded-lg">BlogViewer</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 text-xl font-bold gap-5">
                    {links}
                </ul>
            </div>
            <div className=" navbar-end">
                <ul className="hidden lg:flex lg:gap-5">
                    <li className={`btn btn-sm ${ !isUserAuthenticated ? "flex" : "hidden" }`}><LoginLink >Sign in</LoginLink></li>
                    <li className={`btn btn-sm ${ !isUserAuthenticated ? "flex" : "hidden" }`}><RegisterLink>Sign up</RegisterLink></li>
                    <li className={`btn btn-sm ${ isUserAuthenticated ? "flex" : "hidden"}`}><LogoutLink>Log out</LogoutLink></li>
                </ul>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-300 rounded-box z-50 w-40 py-2 shadow">
                        {linksSmaller}
                    </ul>
                </div>
            </div>
        </div>
    );
};

//const MyProfile = async () => {
    //const { isAuthenticated, getUser } = getKindeServerSession();
   // if (!(await isAuthenticated())) {
    //    redirect("/api/auth/login");
  //  }

export default Navbar;