import React, { useState } from "react";
import { Link } from "react-router-dom";
import githubLogo from "../assets/Images/github-logo-24.png";

function Search_section() {
  const [search, setsearch] = useState("");

  function onHandle(e) {
    setsearch(e.target.value);
  }

  return (
    <div className="flex items-center relative p-4 py-8  mb-1 bg-black rounded-sm">
      <div className="ml-4">
        <Link to={`/`}>
          <img src={githubLogo} className="h-10 w-10 hover:cursor-pointer" />
        </Link>
      </div>
      <div className="flex flex-row sm:flex-row sm:items-center sm:justify-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 space-x-4 absolute right-2">
        <input
          className="border-none bg-transparent py-1 pl-2 rounded-lg outline-none 
               ring-2 ring-blue-600 focus:ring-purple-600 transition duration-100
               shadow-glow focus:shadow-glow text-white"
          type="text"
          name="username"
          value={search}
          onChange={onHandle}
          placeholder="search username..."
        />
        <Link
          to={`/search/${search}`}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg  transition duration-300 transform hover:scale-105 active:scale-95"
        >
          search
        </Link>
      </div>
    </div>
  );
}

export default Search_section;
