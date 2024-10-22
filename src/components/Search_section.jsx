import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import githubLogo from "../assets/Images/github-logo-24.png";
import searchIcon from "../assets/Images/search-12-256.png"; // Replace with your search icon path

function Search_section() {
  const [search, setSearch] = useState("");
  const inputRef = useRef(null); // Create a ref for the input

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input on component mount
    }
  }, []);

  function onHandle(e) {
    setSearch(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default form submission
      if (search.trim()) {
        window.location.href = `/search/${search}`; // Navigate to search results
      }
    }
  };

  return (
    <div className="flex items-center relative p-4 py-8 mb-1 bg-black rounded-sm">
      <div className="ml-4">
        <Link to={`/`}>
          <img src={githubLogo} alt="GitHub Logo" className="h-10 w-10 hover:cursor-pointer" />
        </Link>
      </div>
      <div className="flex flex-row sm:flex-row sm:items-center sm:justify-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 space-x-4 absolute right-5">
        <div className="relative">
          <input
            ref={inputRef} // Attach the ref
            className="border-none bg-transparent py-1.5 sm:py-1 pl-2 pr-10 rounded-2xl sm:rounded-lg outline-none 
                       ring-2 ring-blue-600 focus:ring-purple-600 transition duration-100
                       shadow-glow focus:shadow-glow text-white"
            type="text"
            name="username"
            value={search}
            onChange={onHandle}
            onKeyPress={handleKeyPress} // Listen for key presses
            placeholder="Search username..."
          />
          {/* Search Icon for smaller screens */}
          <Link
            to={`/search/${search}`}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 block sm:hidden" // Show on smaller screens only
          >
            <img src={searchIcon} alt="Search Icon" className="h-7 w-7 bg-gradient-to-r from-blue-600 to-purple-600 p-1.5 rounded-2xl" /> {/* Replace with your icon */}
          </Link>
        </div>
        {/* Search Button for larger screens */}
        <Link
          to={`/search/${search}`}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 hidden sm:block"
        >
          Search
        </Link>
      </div>
    </div>
  );
}

export default Search_section;
