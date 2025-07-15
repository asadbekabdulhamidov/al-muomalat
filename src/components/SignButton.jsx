import React from 'react';

function SignButton({ children, type }) {
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
