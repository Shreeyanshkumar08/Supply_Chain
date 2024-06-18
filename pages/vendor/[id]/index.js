import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const VendorProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  const dataFetcher = async () => {
    const { data } = await axios.get(`/api/auth/${id}`);
    console.log(data);
  };

  return <div>VendorProfile</div>;
};

export default VendorProfile;
