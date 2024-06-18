import React, { useState } from "react";
import { useUser } from "../../hooks/queries";
import SupplyCard from "../../components/SupplyCard";
import BusinessCard from "../../components/Business/businessCard";

export default function UserPage() {
  const [imgHover, setImgHover] = useState(false);

  const { user, isError, isLoading, error } = useUser();

  function hoverHandler() {
    setImgHover((prevState) => !prevState);
  }

  if (isLoading) return <p>Loading</p>;

  return (
    <div className="w-full px-4">
      {JSON.stringify(user)}
      <div className="w-full flex flex-col justify-center items-center">
        <div
          className="h-40 w-40 rounded-full cursor-pointer relative"
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        ></div>

        <h1 className="text-[48px] font-bold"> {user.name} </h1>
        <h5 className="text-[20px] text-gray-500"> {user.email} </h5>
      </div>

      <div className="w-full my-8">
        <h1 className="text-[32px] text-semibold my-4">
          {" "}
          {user.SupplyCreated.length}{" "}
        </h1>
        <div className="w-full md:w-4/5 px-4 grid grid-cols-1 md:grid-cols-2 justify-items-center rounded-xl border-2 mx-auto">
          {user?.SupplyCreated?.map((el) => (
            <SupplyCard
              location={el.location}
              title={el.title}
              tags={el.tags}
              key={el._id}
              numresp={el.proposals.length}
              id={el._id}
              numsup={el.responses.length}
            />
          ))}
        </div>
      </div>

      <div className="w-full my-8">
        <h1 className="text-[32px] text-semibold my-4">Current Sessions</h1>
        {/* <div className="carousel w-11/12 md:w-4/5 h-96 mx-auto border-2 rounded-xl relative">
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
            <button className="btn btn-circle">❮</button>
            <button className="btn btn-circle">❯</button>
          </div>
        </div> */}
        {user.businesses.map((el) => (
          <BusinessCard
            business={el}
            key={el._id}
            id={el._id}
            title={el.onRequest.title}
          />
        ))}
      </div>
    </div>
  );
}
