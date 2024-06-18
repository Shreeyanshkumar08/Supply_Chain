import React from "react";
import DisplayCards from "../components/UI/DisplayCards";

const AboutPage = () => {
  return (
    <div className="flex flex-col px-12">
      <div className="font-bold font-mono text-center text-3xl mt-4 text-sec">
        Meet the minds and devs of the app
      </div>
      <div className="flex flex-col">
        <DisplayCards
          left={true}
          title={"Shreeyansh kumar"}
          desc={
            "Shreeyansh Kumar, is a full stack web developer who loves hld,lld, security and scale. Pursuing his third year in computer science at NIT Patna. Having built first full stack apps in the first three years of college, he is now looking forward to dive deeper in the tech industry and is currently developing ML project. He looks forward to blogging and open-source as well"
          }
        />




      </div>
    </div>
  );
};

export default AboutPage;
