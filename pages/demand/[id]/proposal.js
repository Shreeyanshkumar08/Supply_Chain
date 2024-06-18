import React, { useState } from "react";
import ProposalPage from "../../../components/ProposalPage";
import { useRouter } from "next/router";
import axios from "axios";
import { usePoll } from "../../../hooks/queries";

const Proposal = () => {
  const [recommendations, setRecommendations] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const { Supply, isLoading, isError, error } = usePoll(id);
  const [show, setShow] = useState(false);

  const fetchRecoms = async () => {
    const { data } = await axios.post("/api/resource/find", {
      location: Supply.location ? Supply.location : "Delhi",
    });

    setRecommendations(data);
    setShow(true);
  };

  return (
    <div>
      <ProposalPage id={id} />

      <div className="flex items-center justify-center">
        <button
          className="btn btn-primary flex justify-center"
          onClick={fetchRecoms}
        >
          Nearby services
        </button>

        <button
          onClick={() => setShow((prev) => !prev)}
          className="btn btn-primary ml-4"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>

      {show && (
        <div className="my-3 flex flex-wrap px-12">
          {recommendations.map((el) => (
            <div
              className="mx-2 rounded-lg text-white font-bold bg-slate-800 px-10 my-2 py-6"
              key={Math.random.toString()}
            >
              <div>product: {el.product}</div>
              <div>service: {el.service}</div>
              <div>Availabilty: {el.amt}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Proposal;
