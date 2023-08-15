// components/Navbar.tsx
import Link from "next/link";
import React from "react";
import { useUser } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  const user = useUser();

  return (
    <nav className="flex flex-wrap items-center justify-between bg-gradient-to-r from-blue-600 to-white p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <span className="text-xl font-semibold tracking-tight">
          Symptom 360
        </span>
      </div>
      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
        <div className="text-sm lg:flex-grow">
          <Link
            href="/"
            className="hover:text-customColor2 mr-4 mt-4 block text-white lg:mt-0 lg:inline-block"
          >
            Home
          </Link>
          <Link
            href="/Landing/About"
            className="hover:text-customColor2 mr-4 mt-4 block text-white lg:mt-0 lg:inline-block"
          >
            About
          </Link>
          <Link
            href="/Landing/Contact"
            className="hover:text-customColor2 mr-4 mt-4 block text-white lg:mt-0 lg:inline-block"
          >
            Contact
          </Link>
        </div>
        {/*<div>*/}
        {/*    {user.isSignedIn ?*/}
        {/*        <div*/}
        {/*            className="mt-4 inline-block bg-blue-500 rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-customColor2 lg:mt-0">*/}
        {/*            <SignOutButton/>*/}
        {/*        </div>*/}
        {/*        :*/}
        {/*        <Link*/}
        {/*            href="/Landing/Login"*/}
        {/*            className="mt-4 inline-block bg-blue-500 rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-customColor2 lg:mt-0"*/}
        {/*        >*/}
        {/*            Login*/}
        {/*        </Link>}*/}
        {/*</div>*/}
      </div>
    </nav>
  );
};

export default Navbar;
