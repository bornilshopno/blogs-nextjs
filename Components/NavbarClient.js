"use client"; // Ensure this is client-side

import { useState, useEffect } from "react";
import Link from "next/link";

const NavbarClient = ({ isUserAuthenticated, loginLink, logoutLink, registerLink }) => {
  // Add client-side logic, like user authentication, if necessary
  const [authState, setAuthState] = useState(isUserAuthenticated);

  useEffect(() => {
    setAuthState(isUserAuthenticated); // Make sure to set the client-side state
  }, [isUserAuthenticated]);

  return (
    <div className="flex gap-2 justify-between items-center lg:flex-row flex-col w-10/12 mx-auto py-2 ">
      <div className="flex items-center">
        <div className="flex items-center">
          <Link href="/" className="bg-gray-400 font-bold px-5 py-2 text-xl rounded-lg">BlogViewer</Link>
        </div>
        <div className="">
          <ul className="flex items-center px-1 text-xl font-bold gap-5">
            <li className="py-1 px-3"><Link href="/">Home</Link></li>
            <li className="py-1 px-3"><Link href="/profile">Profile</Link></li>
          </ul>
        </div>
      </div>
      <div className="">
        <ul className="flex gap-5 items-center">
          {!authState && <h2 className="btn btn-sm">{loginLink}</h2>}
          {authState && <h2 className="btn btn-sm">{logoutLink}</h2>}
          {!authState && <h2 className="btn btn-sm">{registerLink}</h2>}
        </ul>
      </div>
    </div>

  );
};

export default NavbarClient;
