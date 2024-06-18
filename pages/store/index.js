import React, { useEffect, useState } from "react";
import { useUser } from "../../hooks/queries";
import axios from "axios";
import Resource from "../../components/Resource/Resource";

const ResourceStore = () => {
  const { user, isLoading, isError, error } = useUser();
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    const helper = async () => {
      const { data } = await axios.post("/api/resource/find", {
        location: user?.location,
      });

      setTemp(data);
    };

    helper();
  }, [user]);
  return (
    <div className="flex flex-wrap my-8">
      {temp.map((el) => (
        <Resource resource={el} key={Math.random.toString()} />
      ))}
    </div>
  );
};

export default ResourceStore;
