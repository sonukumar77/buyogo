import React from 'react'

interface Props {
  title: string;
  buttonStyle?: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ title, buttonStyle = '', disabled = false, onClick }: Props) => {
  return (
    <button
      className={`p-2 rounded-2xl ${buttonStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
