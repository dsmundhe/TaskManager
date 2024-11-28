import React from "react";
import { getInitials } from "../utils/helper";

const ProfileInfo = ({ onLogout }) => {
  const name = localStorage.getItem("name");
  return (
    <div className=" flex items-centre gap-3">
      {name ? (
        <>
          <div
            className="w-12 h-12  flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-200
      
       "
          >
            <h2 className="text-black font-semibold"> {getInitials(name)}</h2>
          </div>

          <div>
            <p className=" text-sm font-medium"> {name}</p>
            <button
              className="text-sm text-slate-70 underline"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default ProfileInfo;
