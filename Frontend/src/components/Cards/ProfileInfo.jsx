import React from "react"
import { getInitials } from "../utils/helper";

const ProfileInfo =({ onLogout }) => {
    return (
      <div className=" flex items-centre gap-3">
        <div className="w-12 h-12 flex items-center jusify-centre rounded-full text-slate-950 font-medium bg-slate-100">
         
         <h2>  {getInitials("John Willam")}</h2>
        </div>

        <div><p className=" text-sm font-medium"> John Willam</p>
        <button className="text-sm text-slate-70 underline" onClick={onLogout}>
            Logout</button>
        </div>
      </div>  
    );
};
export default ProfileInfo;