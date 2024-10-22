import React from "react";

function Profile_sidebar({ userProfileData }) {
  if (!userProfileData) {
    return (
      <div class="flex-col gap-4 w-full flex items-center justify-center">
        <div class="w-20 h-20 border-4 border-transparent text-blue-600 text-4xl animate-spin flex items-center justify-center border-t-blue-600 rounded-full">
          <div class="w-16 h-16 border-4 border-transparent text-purple-600 text-2xl animate-spin flex items-center justify-center border-t-purple-600 rounded-full"></div>
        </div>
      </div>
    );
  }

  let { avatar_url, login, html_url } = userProfileData;
  return (
    <div className=" w-fit m-10 border-white border shadow-xl rounded-lg">
      <img src={avatar_url} alt={login} className="h-48 w-48 rounded-lg" />
      <div className="mt-1 p-1 font-sans font-bold text-lg">
        <a href={html_url} target="_blank">
          {login}
        </a>
        <br />
      </div>
    </div>
  );
}

export default Profile_sidebar;
