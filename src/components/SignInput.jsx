import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';

function SignInput({
  id,
  type,
  placeholder,
  name,
  onChange,
  value,
  error,
  touched,
}) {
  const borderColor = error && touched ? 'border-red-500' : 'border-[#8F8F8F]';

  return (
    <div className="w-full">
      <div
        className={`border-1 flex justify-between items-center h-[60px] ${borderColor} rounded-[8px] pr-4`}
      >
        <label className="h-full w-full">
          <input
            className="h-full w-full outline-none grow px-4 border-0"
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            onChange={onChange}
            value={value}
          />
        </label>

        {type === 'email' && (
          <MdOutlineEmail className="w-7 h-5 text-gray-500" />
        )}
        {name === 'username' && (
          <AiOutlineUser className="w-7 h-5 text-gray-500" />
        )}
      </div>

      {error && touched && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}

export default SignInput;
