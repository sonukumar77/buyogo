import React, { ReactNode } from "react";

interface SelectInputProps {
  name: string;
  value: string;
  label?: string;
  errorMessage?: string;
  labelStyle?: string;
  selectStyle?: string;
  containerStyle?: string;
  errorStyle?: string;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children?: ReactNode;
}

const SelectInput = ({
  name,
  value,
  label,
  labelStyle,
  errorMessage,
  errorStyle,
  containerStyle,
  selectStyle,
  children,
  onSelectChange,
}: SelectInputProps) => {
  return (
    <div className={`w-full ${containerStyle}`}>
      {label ? (
        <label className={`text-blue-600 font-medium ${labelStyle}`}>
          {label}
        </label>
      ) : null}
      <select
        name={name}
        value={value}
        onChange={onSelectChange}
        className={`w-full outline-none bg-blue-50 rounded-2xl p-2 pl-4 ${selectStyle}`}
      >
        {children}
      </select>
      {errorMessage ? (
        <small className={`text-red-500 ${errorStyle}`}>{errorMessage}</small>
      ) : null}
    </div>
  );
};

export default SelectInput;
