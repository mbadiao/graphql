"use client";
import Aside_right from "../components/Aside_right";
import Aside_left from "../components/Aside_left";
import Middle from "../components/Middle";
import Middle_bottom from "../components/Middle_bottom";
import Header from "../components/Header";
const Profile = () => {
  return (
    <>
    <Header/>
      <div className="flex justify-evenly my-5 flex-wrap">
        <Middle />
        <Aside_right />
      </div>
      <div className="flex justify-evenly my-5 flex-wrap">
      <div>
        <Middle_bottom />
      </div>
      <div className="w-max min-w-[35vw]  bg-secondary  rounded-2xl">
        <Aside_left />
        </div>
        </div>
    </>
  );
};

export default Profile;
