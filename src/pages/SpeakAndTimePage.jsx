import React from "react";
import HomeSpeak from "../Home/HomeSpeak";
import Timer from "../components/Timer/Timer";

function SpeakAndTimePage() {
  return (
    <div className="flex flex-col md:flex-row mt-20">
      <div className="w-full md:w-3/4 p-4">
        <HomeSpeak />
      </div>
      <div className="w-full md:w-1/4 p-4">
        <Timer />
      </div>
    </div>
  );
}

export default SpeakAndTimePage;
