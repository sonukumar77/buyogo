import React from "react";

interface InputProps {
  type: string;
  value: string;
  label?: string;
  name: string;
  placeholder?: string;
  errorMessage?: string;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  errorStyle?: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  value,
  label,
  name,
  placeholder,
  errorMessage,
  labelStyle,
  inputStyle,
  containerStyle = "",
  errorStyle,
  onInputChange,
}: InputProps) => {
  const errorClass = errorMessage ? "border border-red-500" : "";

  return (
    <div className={`w-full ${containerStyle}`}>
      {label ? (
        <label className={`text-blue-600 font-medium ${labelStyle}`}>
          {label}
        </label>
      ) : null}
      <input
        type={type}
        value={value}
        onChange={onInputChange}
        placeholder={placeholder}
        name={name}
        className={`outline-none w-full bg-blue-50 rounded-2xl p-2 pl-4 ${errorClass} ${inputStyle}`}
      />
      {errorMessage ? (
        <small className={`text-red-500 ${errorStyle}`}>{errorMessage}</small>
      ) : null}
    </div>
  );
};

export default Input;
