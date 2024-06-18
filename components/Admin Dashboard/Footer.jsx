import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-[hsl(198,94%,53%)]">
      <div>
        <h1 className="w-full text-3xl font-bold text-black">
          supplychain Tech.
        </h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6"></div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-black">Support</h6>
          <ul>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Proposal Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-black">About us</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
