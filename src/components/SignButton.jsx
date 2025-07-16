import React from 'react';
import { Link } from 'react-router-dom';

function SignButton({ children, type, navbar }) {
  if (navbar) {
    return (
      <Link
        to="/login"
        className="bg-[#009688] cursor-pointer rounded-[8px] px-[31px] py-[10px] text-white active:scale-105 transition-all duration-300 "
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className="bg-[#009688] h-[60px] cursor-pointer rounded-[8px] w-full py-[10px] text-white active:scale-105 transition-all duration-300 "
    >
      {children}
    </button>
  );
}

export default SignButton;
