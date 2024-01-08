import { FC } from "react";

interface ButtonProps {
  placeholder: string;
  classname?: string;
  onClick?: React.MouseEventHandler
}

const Button: FC<ButtonProps> = ({ placeholder, classname, onClick }) => {
  return (
    <button
      className={
        classname ? classname : `bg-primary px-4 py-[6px] rounded-md text-white`
      }
      onClick={onClick}
    >
      {placeholder}
    </button>
  );
};

export default Button;
