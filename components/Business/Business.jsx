import Image from "next/image";
import React from "react";

const Profile = ({ business }) => {
  return (
    <>
      <div className="flex py-12">
        <div className="flex flex-col mx-2 items-center justify-around w-1/2 px-8">
          <div className="h-72 bg-red-400 relative w-full">
            <Image src={"/images/home.png"} fill={true} alt="busprof" />
          </div>
          <div className="my-4">{business?.onRequest.title}</div>
        </div>
        <div className="flex flex-col mx-2 items-center justify-around w-1/2 px-8">
          <div>
            <div>{business?.onRequest.title}</div>
          </div>

          <div className="my-4 text-gray-700 overflow-auto">
            {
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vel neque illo eveniet vero assumenda dolores tenetur similique recusandae ab perspiciatis, quam sed, quos, iure expedita! Voluptate nostrum consequatur sed."
            }
          </div>

          <div className="my-4 overflow-auto flex w-full justify-between">
            <div className="text-pink-600 font-bold">{business.owner.name}</div>
            <div className="text-pink-600 font-bold">
              {business.owner.email}
            </div>
          </div>

          {/* <div className="flex flex-col my-4 w-full">
            <div className="flex justify-around w-full flex-wrap my-4">
              <div className="bg-blue-400 h-40 w-1/3 relative"></div>
              <div className="bg-blue-400 h-40 w-1/3 relative"></div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Profile;
