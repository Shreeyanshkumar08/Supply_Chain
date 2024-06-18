import React from "react";

const Profile = ({ name, credits, description, location, email, ratings }) => {
  return (
    <div className="flex py-12">
      <div className="flex flex-col mx-2 items-center justify-around w-1/2 px-8">
        <div className="h-72 bg-red-400 relative w-full"></div>
        <div className="w-full flex justify-between">
          <div className="w-1/3 flex flex-col py-4 px-4 items-center">
            <div
              className="radial-progress bg-white border-2 mx-2 text-purple-700"
              style={{ "--value": 70 }}
            >
              75%
            </div>
            <div className="text-pink-600 my-2">{"Rating"}</div>
          </div>
          <div className="w-1/3 flex flex-col py-4 px-4 items-center">
            <div
              className="radial-progress bg-white border-2 mx-2 text-purple-700"
              style={{ "--value": 70 }}
            >
              75%
            </div>
            <div className="text-pink-600 my-2">{"Rating"}</div>
          </div>
          <div className="w-1/3 flex flex-col py-4 px-4 items-center">
            <div
              className="radial-progress bg-white border-2 mx-2 text-purple-700"
              style={{ "--value": 70 }}
            >
              75%
            </div>
            <div className="text-pink-600 my-2">{"Rating"}</div>
          </div>
        </div>
        <div>{description}</div>
      </div>
      <div className="flex flex-col mx-2 items-center justify-around w-1/2 px-8">
        <div className="flex w-full justify-between my-4">
          <div className="text-lg font-bold uppercase">{name}</div>
          <div className="font-bold text-pink-600">{credits}</div>
        </div>

        <div className="my-4 text-gray-700">{description}</div>

        <div className="flex justify-between w-full font-semibold text-pink-600 items-center my-4">
          <div>{location}</div>
          <div>{email}</div>
        </div>

        <div className="flex flex-col my-4 w-full">
          <div className="w-full justify-around flex flex-wrap shadow py-4">
            <div className="w-1/3 border-r-2">{location}</div>
            <div className="w-1/3 border-r-2">{email}</div>
          </div>

          <div className="flex justify-around w-full flex-wrap my-4">
            <div className="bg-blue-400 h-40 w-1/3 relative"></div>
            <div className="bg-blue-400 h-40 w-1/3 relative"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
