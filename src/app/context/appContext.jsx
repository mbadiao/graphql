"use client"
import { useContext, createContext, useState, useEffect } from "react";
import { queryUser } from "@/app/query/";
import { useRouter } from "next/navigation";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState({});
  const [errors, setErrors] = useState(null);
  const [token, setToken] = useState(null);

  const router = useRouter();

  const getDatas = async (token) => {
    if (!token) {
      setLoading(false);
      router.push("/");
      return;
    }
    try {
      const response = await fetch(
        "https://learn.zone01dakar.sn/api/graphql-engine/v1/graphql",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ query: `${queryUser}` }),
        }
      );
      if (!response.ok) {
        router.push("/");
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.errors) {
        router.push("/");
        throw new Error(data.errors.map((err) => err.message).join(", "));
      }
      setAllData(data);
    } catch (error) {
      router.push("/");
      setErrors(error.message);
    } finally {
      setLoading(false);
    }
  };

  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [passwordLogin, setPassword] = useState("");
  const [errorLogin, setError] = useState(null);

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

    const encodeToBase64 = (str) => {
      return btoa(unescape(encodeURIComponent(str)));
    };
    const hash = encodeToBase64(`${usernameOrEmail}:${passwordLogin}`);
    try {
      const res = await fetch("https://learn.zone01dakar.sn/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${hash}`,
        },
      });
      if (!res.ok) {
        throw new Error("Invalid credentials");
      }
      const data = await res.json();
      localStorage.setItem("token", data);
      setToken(data);
      await getDatas(data);
      router.push("/profile");
    } catch (error) {
      setError(error.message);
      setLoading(false);
      router.push("/");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        getDatas(storedToken);
      } else {
        setLoading(false); // Stop loading if no token is found
      }
    }
  }, []);

  useEffect(() => {
    if (token) {
      getDatas(token);
    }
  }, [token]);

  useEffect(() => {
    // Ensure to check if window is defined before accessing localStorage or router
    if (typeof window !== "undefined") {
      if (!loading && (!token || !Object.keys(allData).length)) {
        router.push("/");
      }
    }
  }, [loading, token, allData]);

  const User = allData.data?.user;
  const TransactionXp = allData.data?.transaction_xp;
  const TransactionAudits = allData.data?.transaction_audits;
  const TransactionSkills = allData.data?.transaction_skills;
  const TransactionAggregate = allData.data?.transaction_aggregate;
  const XpView = allData.data?.xp_view;

  const data = {
    setUsernameOrEmail,
    usernameOrEmail,
    setPassword,
    login,
    passwordLogin,
    errorLogin,
    User,
    TransactionXp,
    TransactionAudits,
    TransactionSkills,
    TransactionAggregate,
    XpView,
    loading,
    allData,
    errors,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
