import React from "react";

interface CountButtonProps {
    buttonCount: any;
        onClick: (text: number) => void;
}

const CountButton: React.FC<CountButtonProps> = ({ buttonCount, onClick }) => {
  const buttonClick = () => {
    onClick(buttonCount);
  }

  return (
    <button className="button" type="button" onClick={buttonClick}>
      {buttonCount}
    </button>
  );
};

export default CountButton;