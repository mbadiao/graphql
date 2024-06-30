// "use client";
// import { useEffect } from "react";
// import { useAppContext } from "../context/appContext";
// import { useRouter } from "next/navigation";

// const protectedRoute = (WrappedComponent) => {
//   return function WithAuth(props) {
//     const token = localStorage.getItem("token");
//     const router = useRouter();

//     useEffect(() => {
//       if (!token) {
//         router.push("/");
//       }
//     }, [token, router]);

//     if (!token) {
//       return null;
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// export default protectedRoute;

import React from 'react'

const ProtectedRoute = () => {
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute