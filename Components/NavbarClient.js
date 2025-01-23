"use client";

import Link from "next/link";

const NavbarClient = ({ isUserAuthenticated, loginLink, logoutLink, registerLink }) => {


    // const links = (
    //     <>
    //         <li>
    //             <Link href="/">Home</Link>
    //         </li>
    //         <li>
    //             <Link href="/profile">Profile</Link>
    //         </li>
    //     </>
    // );

    // const linksSmaller = (
    //     <>
    //         <li>
    //             <Link href="/">Home</Link>
    //         </li>
    //         <li>
    //             <Link href="/profile">Profile</Link>
    //         </li>
    //         {isUserAuthenticated ? logoutLink : loginLink}
    //     </>
    // );

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center ">
                <a className="bg-gray-400 font-bold px-5 py-2 text-xl rounded-lg">BlogViewer</a>
            </div>
            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl font-bold gap-5">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/profile">Profile</Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center">
                <ul className="hidden lg:flex lg:gap-5 items-center">
                    {!isUserAuthenticated && loginLink}
                    {isUserAuthenticated && logoutLink}
                    {!isUserAuthenticated && registerLink}
                </ul>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-300 rounded-box z-50 w-40 py-2 shadow"
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/profile">Profile</Link>
                        </li>
                        {isUserAuthenticated ? logoutLink : loginLink}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavbarClient;
