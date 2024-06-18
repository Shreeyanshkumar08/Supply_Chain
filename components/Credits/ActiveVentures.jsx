import React, { useState } from "react";
import IncrementButton from "./IncrementButton";

export default function ActiveVentures() {
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  return (
    <div className="py-[100px] px-2">
      <div className="mx-auto md:grid grid-cols-3 gap-6">
        <div className="shadow-xl  h-[350px] my-4 hover:scale-105 duration-500">
          <div className="p-6 my-10">
            <p className="text-xl p-4">
              <strong>Vendor 1</strong>
            </p>
            <div className="p-4">
              {showContent1 && (
                <div>
                  if Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                  minima quos nisi modi amet quae eveniet ullam, quaerat nemo
                  repellendus maxime hic sit fuga tempore eaque illo numquam eum
                  nihil!
                </div>
              )}
              <br></br>
              <div className="flex space-x-10">
                <button
                  onClick={() => setShowContent1(!showContent1)}
                  class="bg-pink hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded"
                >
                  {showContent1 ? "Hide Content" : "Show Content"}
                </button>
                <IncrementButton />
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-xl h-[350px] my-4 hover:scale-105 duration-500 bg-gray-100">
          <div className="p-6 my-10">
            <p className="text-xl p-4">
              <strong>Vendor 2</strong>
            </p>
            <div className="p-4">
              {showContent2 && (
                <div>
                  if Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                  minima quos nisi modi amet quae eveniet ullam, quaerat nemo
                  repellendus maxime hic sit fuga tempore eaque illo numquam eum
                  nihil!
                </div>
              )}
              <br></br>
              <div className="flex space-x-10">
                <button
                  onClick={() => setShowContent2(!showContent2)}
                  class="bg-pink hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded"
                >
                  {showContent2 ? "Hide Content" : "Show Content"}
                </button>
                <IncrementButton />
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-xl h-[350px] my-4  hover:scale-105 duration-500">
          <div className="p-6 my-10">
            <p className="text-xl p-4">
              <strong>Vendor 3</strong>
            </p>
            <div className="p-4">
              {showContent3 && (
                <div>
                  if Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                  minima quos nisi modi amet quae eveniet ullam, quaerat nemo
                  repellendus maxime hic sit fuga tempore eaque illo numquam eum
                  nihil!
                </div>
              )}
              <br></br>
              <div className="flex space-x-10">
                <button
                  onClick={() => setShowContent3(!showContent3)}
                  class="bg-pink hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded"
                >
                  {showContent3 ? "Hide Content" : "Show Content"}
                </button>
                <IncrementButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
