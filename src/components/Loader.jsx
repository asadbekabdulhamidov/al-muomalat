import React from "react";

function Loader() {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="h-15 w-15 animate-spin rounded-full border-[6px] border-solid border-blue-500 border-t-transparent"></div>
      </div>
    </div>
  );
}

export default Loader;
