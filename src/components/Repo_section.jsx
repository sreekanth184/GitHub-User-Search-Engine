import React from "react";
import Repo_card from "./Repo_card";

function Repo_section({ repoData }) {
  if (!repoData) {
    return (
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-transparent text-blue-600 text-4xl animate-spin flex items-center justify-center border-t-blue-600 rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-purple-600 text-2xl animate-spin flex items-center justify-center border-t-purple-600 rounded-full"></div>
        </div>
      </div>
    );
  }

  let count = repoData.length;

  return (
    <>
      <div className="m-2 my-6 pl-4 font-sans font-bold text-2xl">
        Repositories ({count})
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {repoData.map((repo) => (
          <Repo_card key={repo.id} repoData={repo} />
        ))}
      </div>
    </>
  );
}

export default Repo_section;
