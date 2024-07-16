import React from "react";
import HomeWrite from "../Home/HomeWrite";
import Timer from "../components/Timer/Timer";

function WriteAndTimePage() {
  return (
    <div className="flex flex-col md:flex-row mt-20">
      <div className="w-full md:w-3/4 p-4">
        <HomeWrite />
      </div>
      <div className="w-full md:w-1/4 p-4">
        <Timer />
      </div>
    </div>
  );
}

export default WriteAndTimePage;
