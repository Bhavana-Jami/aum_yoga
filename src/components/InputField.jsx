import React from "react";
import { Eye, EyeOff } from "lucide-react";

const InputField = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  showToggle,
  toggle,
  showState,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#745982]"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        //   required
        />
        {error && <p className="text-red-400">{error}</p>}
        {showToggle && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={toggle}
          >
            {showState ? (
              <EyeOff className="h-5 w-5 text-gray-500" />
            ) : (
              <Eye className="h-5 w-5 text-gray-500" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
