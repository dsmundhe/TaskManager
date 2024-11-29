import React from "react";
import { getInitials } from "../utils/helper";

const ProfileInfo = () => {
  const name = localStorage.getItem("name");
  return (
    <div className="flex items-center gap-4   rounded-lg   hover:shadow-lg transition-shadow duration-300">
      {name ? (
        <>
          {/* User Avatar with Initials */}
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold text-lg">
            <h2>{getInitials(name)}</h2>
          </div>

          {/* User Information */}
          <div className="flex flex-col justify-center">
            <p className="text-base font-semibold text-gray-800">{name}</p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ProfileInfo;
