import { useRouter } from "next/router";
import React from "react";

export default function BusinessCard({ title, id, desc }) {
  console.log(desc, id);
  const router = useRouter();

  return (
    <div className="card md:card-side bg-base-100 shadow-xl w-[600px] mx-auto my-8 rounded-full">
      <div className="bg-red-500 md:w-2/5 text-center rounded-l-2xl flex justify-center items-center">
        <h1 className="text-2xl font-bold px-12"> {title} </h1>
      </div>
      <div
        className="card-body bg-slate-800 text-white
      "
      >
        <h2 className="card-title">{desc} </h2>
        <p>This is the ongoing session card!</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary px-12 py-2"
            onClick={() => router.push(`/business/${id}`)}
          >
            Visit
          </button>
        </div>
      </div>
    </div>
  );
}
