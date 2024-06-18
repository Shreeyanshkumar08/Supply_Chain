import React from "react";
import Plans from "./ActiveVentures";

export default function Content() {
  return (
    <div className="max-w-[1240px] mx-auto md:flex flex-cols-2 gap-6">
      <div className="">
        <Plans />
      </div>
    </div>
  );
}
