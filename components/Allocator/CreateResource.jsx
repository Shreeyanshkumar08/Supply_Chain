import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateResource = () => {
  const { data: session } = useSession();

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [base, setBase] = useState(0);

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post("/api/resource", {
      title,
      service: type,
      quantity: base,
      id: session?.user?.id,
    });

    toast.success("Created");
    router.push("/allocator");
  };

  return (
    <div className="py-20 px-40 ">
      <h1 className="text-center my-12 text-red-500 text-3xl">
        Add a new Resource
      </h1>

      <form
        action=""
        className="flex flex-col justify-center items-center w-full"
      >
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="input my-4 input-lg"
          placeholder="Enter Title of item"
        />
        <input
          type="text"
          onChange={(e) => setType(e.target.value)}
          className="input my-4 input-lg"
          placeholder="Enter Type of item"
        />
        <input
          type="number"
          onChange={(e) => setBase(e.target.value)}
          className="input my-4 input-lg"
          placeholder="Enter Base Price"
        />

        <button
          onClick={submitHandler}
          className="btn btn-lg btn-secondary text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateResource;
