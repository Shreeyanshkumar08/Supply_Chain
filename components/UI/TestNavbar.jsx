import { signIn, useSession } from "next-auth/react";
import React from "react";
import { signOut } from "next-auth/react";
import { useUser } from "../../hooks/queries";
import Link from "next/link";

const TestNav = () => {
  const { data: session } = useSession();
  const { user, isError, isLoading, error } = useUser();

  const signouthandler = () => {
    signOut();
  };

  return (
    <div className="bg-blue-600 text-white flex justify-between items-center">
      <div className="btn btn-ghost">Supplychain</div>
      <div className="flex items-center justify-around">
        {session ? (
          <div onClick={() => signouthandler()}>Logout</div>
        ) : (
          <Link href={"/auth"}>Login</Link>
        )}

        <div> {session && (isLoading ? "Loading" : user?.name)}</div>
        {session && session.user && session.user.role === "basic" && (
          <Link className="btn btn-ghost" href={"/Supply/new"}>
            New Poll
          </Link>
        )}
        <Link className="btn btn-ghost" href={"/Supply"}>
          Polls
        </Link>
      </div>
    </div>
  );
};

export default TestNav;
