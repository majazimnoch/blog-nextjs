import React from 'react';

interface ButtonTwoProps {
  label: string;
  count?: number;
  colour?: string; 
  large?: boolean;
  onClick?: () => void; // Add onClick as a function that takes no arguments and returns void
}

const ButtonTwo: React.FC<ButtonTwoProps> = ({ label, colour, large, onClick }: ButtonTwoProps) => {
  const classList = "p-3 bg-transparent border rounded-lg transition duration-500 ease-in-out hover:bg-grass hover:text-snow hover:border-grass"

  return (
    <div className="my-3">
      <button className={classList} onClick={onClick}>
        {`${label}`}
      </button>
    </div>
  );
};

export default ButtonTwo;
