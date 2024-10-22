import React from "react";

function Default() {
  return (
    <div className="relative bg-custom-bg bg-cover bg-center bg-no-repeat w-full h-screen text-white flex flex-col items-center justify-center">
      {/* Heading in the same line */}
      <h1 className="text-4xl sm:text-5xl  lg:text-6xl font-bold text-center shadow-lg shadow-white absolute top-28">
        Let's build from here
      </h1>

      {/* Subheading below the heading, also centered */}
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-4 text-center absolute top-48 ">
        The World's Leading Developers Platform!
      </h2>
    </div>
  );
}

export default Default;
