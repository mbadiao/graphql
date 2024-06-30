"use client";
import { useAppContext } from "../context/appContext";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import ProfileChart from "./Profile_Chart";
const Aside_right = () => {
  const { User, loading, errors } = useAppContext();
  const router = useRouter();

  if (loading) {
    return <>loading ...</>;
  }
  if (!User || User.length === 0) {
    return <div>No data available</div>;
  }

  const { events, login, totalDown, totalUp, auditRatio, attrs } = User[0];
  const level = events[0].level;

  function getUserRank(level) {
    if (level >= 50) {
      return "Junior developer";
    } else if (level >= 40) {
      return "Basic developer";
    } else if (level >= 30) {
      return "Assistant developer";
    } else if (level >= 20) {
      return "Apprentice developer";
    } else if (level >= 10) {
      return "Beginner developer";
    } else {
      return "Aspiring developer";
    }
  }

  const userRank = getUserRank(level);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center bg-primary h-max p-5 w-[25vw] rounded-2xl text-white">
      {attrs.gender === "Masculin" ? (
        <Image src="/masculin.svg" alt="masculin" width={100} height={100} />
      ) : (
        <Image src="/feminin.svg" alt="feminin" width={100} height={100} />
      )}
      <div className="font-bold">{login}</div>
      <div>{userRank}</div>
      <div >LVL {level}</div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold">Audit Ratio</h2>
        <ProfileChart totalUp={totalUp} totalDown={totalDown} />
        <div>
          <h1 className="text-2xl">{(auditRatio).toFixed(1)}</h1>
        </div>
      </div>
      <button onClick={logout} className="btn bg-secondary text-primary p-2 rounded-2xl px-5 mt-2">
        log Out
      </button>
    </div>
  );
};

export default Aside_right;
