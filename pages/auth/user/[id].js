import axios from "axios";
import { useEffect, useState } from "react";
import SupplyCard from "../../../components/SupplyCard";
import BusinessCard from "../../../components/Business/businessCard";

export default function UserPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const helper = async () => {
      const { data } = await axios.get("/api/auth/profile");
      setUser(data);
    };

    helper();
  }, []);

  if (!user) return <p>Loading</p>;

  return (
    <div className="w-full px-4 py-6">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-[48px] font-bold"> {user.name} </h1>
        <h5 className="text-[20px] text-gray-500"> {user.email} </h5>
        <h5 className="text-[20px] text-gray-500"> {user.role} </h5>
      </div>

      <div className="w-full my-8">
        <h1 className="text-[32px] text-semibold my-4 flex flex-col items-center">
          Supplys: {user.SupplyCreated.length}
        </h1>
        <div className="flex flex-wrap w-full justify-around">
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
        <h1 className="text-center text-2xl text-semibold my-4 ">
          Current Sessions
        </h1>

        {user.businesses.map((el) => (
          <BusinessCard
            business={el}
            key={el._id}
            id={el._id}
            title={el.onRequest.title}
            desc={user.name}
          />
        ))}
      </div>
    </div>
  );
}
