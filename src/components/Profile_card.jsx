import React from "react";
import { Link } from "react-router-dom";

function Profile_card({ profileName, profileImg, profileLink }) {
  return (
    <div className=" flex flex-col gap-4 border rounded-lg w-fit m-6">
      <div>
        <img
          src={profileImg}
          alt={profileName}
          className="h-48 w-48 rounded-t-lg"
        />
        <a
          className="text-sm font-semibold font-sans p-1"
          href={profileLink}
          target="_blank"
        >
          {profileName}
        </a>
        <br />
      </div>
      <div>
        <Link
          className="text-xs font-semibold font-sans p-1 text-blue-600"
          to={`/user/${profileName}`}
        >
          More details
        </Link>
      </div>
    </div>
  );
}

export default Profile_card;
