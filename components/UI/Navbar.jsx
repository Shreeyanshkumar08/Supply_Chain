import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { getUserData } from "../../utils/api";
import { useUser } from "../../hooks/queries";

import React, { useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();

  const signouthandler = () => {
    signOut();
    // signIn("credentials", { email: "", password: "" });
  };

  const { user, isLoading, isError, error } = useUser();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-col navbar bg-prim sticky top-0 z-10 px-6 text-xl md:flex-row justify-between items-center">
      <Link href="/" className="text-xl font-bold text-white">
        Supplychain
      </Link>

      <div className="w-1/3 flex flex-col md:flex-row justify-between text-white mx-4">
        {session && (
          <Link
            href={`/auth/user/${session.user.id}`}
            className="hover:border-b-2 border-white"
          >
            {user?.name}
          </Link>
        )}
        <Link href="/Supply" className="hover:border-b-2 border-white mx-4">
          Supplys
        </Link>
        {session && session?.user?.role === "allocator" && (
          <Link
            href="/resource/new"
            className="hover:border-b-2 border-white mx-4"
          >
            New Resource
          </Link>
        )}
        {session && session.user && session.user.role === "basic" && (
          <Link
            href="/Supply/new"
            className="hover:border-b-2 border-white mx-4"
          >
            Create
          </Link>
        )}
        {session && session.user && session.user.role === "allocator" && (
          <Link
            href="/allocator"
            className="hover:border-b-2 border-white mx-4"
          >
            Allocate
          </Link>
        )}
      </div>

      {!session && (
        <Link href="/auth" className="">
          <button className="btn w-40 rounded-full border-none bg-white text-black transition duration-300 ease-in-out  hover:text-prim hover:bg-white">
            Login
          </button>
        </Link>
      )}
      {!!session && (
        <button
          className="btn w-40 rounded-full border-none bg-white text-black transition duration-300 ease-in-out  hover:text-prim hover:bg-white"
          onClick={signouthandler}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
