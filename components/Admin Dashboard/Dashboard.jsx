import React, { useState } from "react";

const Dashboard = () => {
  const [sidebarSel, setSidebarSel] = useState("bus");
  return (
    <div>
      <div className="shadow-lg p-2 flex justify-between items-stretch rounded-lg">
        <div className="flex flex-col px-4 border-r-2 items-center bg-blue-300 py-8 justify-around">
          <div className="bg-purple-600 rounded-full p-8 h-28 w-28 flex items-center justify-center text-2xl font-bold text-white">
            A
          </div>

          <div className="my-4">
            <div
              className="my-2 px-4 py-2 border-y-2 text-xl text-black hover:bg-purple-600 hover:text-white"
              onClick={() => setSidebarSel("bus")}
            >
              Businesses
            </div>
            <div
              className="my-2 px-4 py-2 border-y-2 text-xl text-black hover:bg-purple-600 hover:text-white"
              onClick={() => setSidebarSel("res")}
            >
              Resources
            </div>
            <div
              className="my-2 px-4 py-2 border-y-2 text-xl text-black hover:bg-purple-600 hover:text-white"
              onClick={() => setSidebarSel("comp")}
            >
              Complaints
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          {sidebarSel === "bus" && (
            <div className="my-4 flex justify-around items-center w-full px-4 flex-wrap">
              <div className="w-1/3 p-4 shadow-lg mx-3 py-16 my-4"></div>
              <div className="w-1/3 p-4 shadow-lg mx-3 py-16 my-4"></div>
              <div className="w-1/3 p-4 shadow-lg mx-3 py-16 my-4"></div>
              <div className="w-1/3 p-4 shadow-lg mx-3 py-16 my-4"></div>
              <div className="w-1/3 p-4 shadow-lg mx-3 py-16 my-4"></div>
              <div className="w-1/3 p-4 shadow-lg mx-3 py-16 my-4"></div>
            </div>
          )}
          {sidebarSel === "res" && (
            <div className="my-4 flex justify-around w-full px-4">
              <div className="w-1/3 p-4 shadow-lg mx-3 py-32 my-4"></div>
              <div className="w-1/3 p-4 shadow-lg mx-3 py-32 my-4"></div>
              <div className="w-1/3 p-4 shadow-lg mx-3 py-32 my-4"></div>
            </div>
          )}
          {sidebarSel === "comp" && (
            <div className="my-4 flex flex-col items-center justify-around w-full px-4">
              <div className="w-full p-2 shadow-lg bg-red-400 rounded-md px-4 py-8 flex flex-col">
                <div>Complaint</div>
                <div className="flex items-center my-2">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="py-4 px-2 rounded-lg flex-1"
                  />
                  <div className="btn btn-circle mx-3">Res</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
