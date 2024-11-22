import React from "react";
import DuaItems from "../DuaItems/DuaItems";

export default function MainContent() {
  return (
    <div className="h-[calc(100vh-126px)] overflow-y-auto">
      <div className="px-[30px] py-[18px] bg-white rounded-[10px] mr-1">
        <p className="text-[#393939] text-[15px] font-semibold leading-6">
          <span className="text-[#1FA45B]">Section:</span> The servant is
          dependent on his Lord
        </p>
      </div>
      {/* --- dua section start --- */}
      <div className="mr-1">
        <DuaItems />
        <DuaItems />
      </div>
      {/* --- dua section end --- */}
    </div>
  );
}
