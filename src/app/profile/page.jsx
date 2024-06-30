"use client";
import Aside_right from "../components/Aside_right";
import Aside_left from "../components/Aside_left";
import Middle from "../components/Middle";
import Middle_bottom from "../components/Middle_bottom";
const Profile = () => {
  return (
    <>
      <div className="flex justify-evenly py-10">
        <Middle />
        <Aside_right />
      </div>
      <div className="flex justify-evenly py-10">
        <Aside_left />
        <Middle_bottom />
      </div>
    </>
  );
};

export default Profile;
