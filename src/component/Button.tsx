import { FC } from "react";

interface ButtonProps {
  placeholder: string;
}

const Button: FC<ButtonProps> = ({
  placeholder
}) => {
  return (
    <div className='bg-primary px-2 py-[6px] rounded-md text-white'>
        {placeholder}
    </div>
  )
}

export default Button