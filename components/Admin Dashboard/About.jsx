import React, { useState } from "react";
import Dashboard from "./Dashboard";

export default function Plans() {
  // const [showContent1, setShowContent1] = useState(false);
  // const [showContent2, setShowContent2] = useState(false);
  // const [showContent3, setShowContent3] = useState(false);

  const [sidebarSel, setSidebarSel] = useState("bus");

  console.log(setSidebarSel);

  return (
    <div className="py-6 my-6 ml-4 pl-4">
      {/* <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
        <div className="shadow-xl  h-[500px] my-4 hover:scale-105 duration-500">
          <div className="p-6 my-10">
            <p className="text-xl p-4">
              <strong>Problems in signing?</strong>
            </p>
            <div className="p-4">
              
                <div>
                  if Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                  minima quos nisi modi amet quae eveniet ullam, quaerat nemo
                  repellendus maxime hic sit fuga tempore eaque illo numquam eum
                  nihil!
                </div>
              <br></br>
             
            </div>
          </div>
        </div>
        <div className="shadow-xl h-[500px] my-4 hover:scale-105 duration-500 bg-gray-100">
          <div className="p-6 my-10">
            <p className="text-xl p-4">
              <strong>About us</strong>
            </p>
            <div className="p-4">
            
                <div>
                  if Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                  minima quos nisi modi amet quae eveniet ullam, quaerat nemo
                  repellendus maxime hic sit fuga tempore eaque illo numquam eum
                  nihil!
                </div>
             
              <br></br>
              
            </div>
          </div>
        </div>
        <div className="shadow-xl h-[500px] my-4  hover:scale-105 duration-500">
          <div className="p-6 my-10">
            <p className="text-xl p-4">
              <strong>How do I check the progress of my proposal?</strong>
            </p>
            <div className="p-4">
              
                <div>
                  if Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                  minima quos nisi modi amet quae eveniet ullam, quaerat nemo
                  repellendus maxime hic sit fuga tempore eaque illo numquam eum
                  nihil!
                </div>
              
              <br></br>
              
            </div>
          </div>
        </div>
      </div> */}

      <Dashboard />
    </div>
  );
}
