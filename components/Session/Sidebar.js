import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-1/5 bg-black flex flex-col justify-around items-center text-white font-semibold h-screen">
      <button className="p-4 w-4/5 bg-sec">
        <Link href="/session/dashboard">Dashboard</Link>
      </button>
      <button className="p-4 w-4/5">
        <Link href="/session">Requests</Link>
      </button>
      <button className="p-4 w-4/5">
        <Link href="/session/dashboard">Chat</Link>
      </button>
      <button className="p-4 w-4/5">
        <Link href="/session/dashboard">Review</Link>
      </button>
    </div>
  );
}
