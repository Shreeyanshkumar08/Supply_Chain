import React from "react";

export default function Banner() {
    return (
        <div className="bg-[url('/images/home.jpg')] bg-center bg-cover h-screen flex flex-col justify-center items-center w-full">
            <h3 className="text-xl text-white md:text-[40px] font-bold my-8">
                Supplychain
            </h3>
            <h2 className="text-white text-[48px] md:text-[64px] my-8 text-center">
                Making Supply And <br />
                Service Easy
            </h2>
            {/* <button className="bg-black text-white p-3 rounded">Get Started</button> */}
        </div>
    );
}
