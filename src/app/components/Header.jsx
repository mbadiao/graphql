"use client";
import { useAppContext } from "../context/appContext";
const Header = () => {
  const { User, loading } = useAppContext();
    if (!User || User.length === 0) {
      return <div>No data available</div>;
    }
  return loading ? (
    <div>Loading ..</div>
  ) : (
    <header>
      <div className="flex justify-center items-center p-10">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-black">Welcome</h1>
          <p className="text-2xl text-primary max-w-4xl rounded-xl p-3 text-ellipsis bg-white">
            {User && User[0].firstName} {User && User[0].lastName}
          </p>
          <span className="text-4xl">👋</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
