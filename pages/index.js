import { getCookie, setCookie } from "cookies-next";

import LandingPageComponent from "../components/Landing Page/App";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    let t = getCookie("err");

    if (t) {
      toast.error(t);
      setCookie("err", null);
    }
  }, [router]);

  return (
    <div>
      <LandingPageComponent />
    </div>
  );
}
