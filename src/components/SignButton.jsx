import React from "react";
import { Link } from "react-router-dom";

function SignButton({ children, type, navbar }) {
  if (navbar) {
    return (
      <Link
        to="/login"
        className="hidden cursor-pointer rounded-[8px] bg-[#009688] px-[31px] py-[10px] text-white transition-all duration-300 active:scale-105 md:block"
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className="h-[60px] w-full cursor-pointer rounded-[8px] bg-[#009688] py-[10px] text-white transition-all duration-300 active:scale-105"
    >
      {children}
    </button>
  );
}

export default SignButton;
