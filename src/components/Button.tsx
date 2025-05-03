import { ButtonHTMLAttributes } from "react";

type VariantsType = keyof typeof variants;

type ButtonProps = {
  variant: VariantsType;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const style =
  "font-medium text-[16px] transition-colors cursor-pointer rounded-full py-2 block px-8 ";

const variants = {
  solid: "bg-[#9fe870] hover:bg-[#7fe141]",
  outlined: "bg-white border border-black hover:bg-[#7fe141]",
};

function Button({ variant, children, ...vast }: ButtonProps) {
  return (
    <button className={style + variants[variant]} {...vast}>
      {children}
    </button>
  );
}

export default Button;
