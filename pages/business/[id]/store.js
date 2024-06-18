import React, { useEffect, useState } from "react";

import axios from "axios";
import { useUser } from "../../../hooks/queries";
import Resource from "../../../components/Resource/Resource";
import { useRouter } from "next/router";

const ResourceStore = () => {
  const { user, isLoading, isError, error } = useUser();
  const [temp, setTemp] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (user) {
      const helper = async () => {
        const { data } = await axios.post("/api/resource/find", {
          location: user.location ? user.location : "Mumbai",
        });

        setTemp(data);
      };
      helper();
    }
  }, [user]);
  return (
    <div className="flex flex-wrap justify-around w-full">
      {temp.map((el) => (
        <Resource resource={el} bussId={id} key={Math.random.toString()} />
      ))}
    </div>
  );
};

export default ResourceStore;
