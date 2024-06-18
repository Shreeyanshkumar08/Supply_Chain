import React, { useState } from "react";
import SupplyCard from "./SupplyCard";

export default function SupplysPageComponent({ Supplys }) {
  const [searchText, setSearchText] = useState("");

  function searchHandler(event) {
    setSearchText(event.target.value);
  }

  return (
    <>
      <div class="px-4 flex justify-between items-center shadow-lg">
        <h2 class="text-2xl font-bold"> Supplys</h2>
        {/* <div class="flex justify-evenly items-center w-1/2">
          <div className="input-group my-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered rounded-3xl w-full p-4"
              onChange={searchHandler}
              value={searchText}
            />
          </div>
        </div> */}
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {Supplys?.map((el) => (
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
    </>
  );
}
