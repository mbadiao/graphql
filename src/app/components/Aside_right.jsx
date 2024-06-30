"use client";
import { useAppContext } from "../context/appContext";
import Image from "next/image";
import { useRouter } from "next/navigation"; 

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
    <div className="flex flex-col items-center">
      {attrs.gender === "Masculin" ? (
        <Image src="/masculin.svg" alt="masculin" width={100} height={100} />
      ) : (
        <Image src="/feminin.svg" alt="feminin" width={100} height={100} />
      )}
      <div>{login}</div>
      <div>{userRank}</div>
      <div>LVL {level}</div>
      <div>
        <h2>Audit Ratio</h2>
        <div>{totalUp} done</div>
        <div>{totalDown} received</div>
        <div>
          <h1>{auditRatio}</h1>
        </div>
      </div>
      <button onClick={logout} className="btn">
        log Out
      </button>
    </div>
  );
};

export default Aside_right;
