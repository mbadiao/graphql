"use client";
import Header from "./Header";
import Chart_top from "./Chart_top";
const Middle_top = () => {
  return (
    <div className="h-max w-[55vw] rounded-2xl bg-secondary p-4">
      <Header />
      <Chart_top />
    </div>
  );
};

export default Middle_top;
