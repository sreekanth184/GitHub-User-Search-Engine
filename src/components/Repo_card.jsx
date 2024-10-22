import React from "react";

function Repo_card({ repoData }) {
  let { name, private: isPrivate, html_url, description } = repoData;
  return (
    <div className="m-3 p-3 shadow-lg space-y-4 ">
      <div className="flex flex-row justify-between">
        <h2 className="font-bold  text-blue-400 text-md">{name}</h2>
        <h3 className="border border-gray-200  text-xs text-gray-700 rounded-xl px-3 text-center">
          {isPrivate ? "private" : "public"}
        </h3>
      </div>
      <div className="space-y-2">
        {description && <h3 className="text-md font-sans "> {description}</h3>}
        <div>
          <a
            href={html_url}
            target="_blank"
            className=" bg-gray-200 border border-gray-200 px-2 rounded-md text-sm font-medium"
          >
            Repo Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Repo_card;
