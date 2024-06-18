import React from "react";
import Profile from "../../components/Vendor/Profile/Profile";

const ProfilePage = () => {
  return (
    <div className="">
      <Profile
        name={"name1"}
        description={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dolores a esse explicabo quasi iste consequatur, nulla amet ducimus! Expedita deserunt alias esse rem, corrupti minima eos amet ex similique."
        }
        credits={100}
        email={"random@gmail.com"}
        location={"Location"}
        ratings={100}
        key={Math.random.toString()}
      />
    </div>
  );
};

export default ProfilePage;
