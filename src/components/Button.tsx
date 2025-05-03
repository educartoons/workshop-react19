import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const button = cva(
  "font-medium text-[16px] transition-colors cursor-pointer rounded-full py-3 block px-8",
  {
    variants: {
      variant: {
        solid: "bg-[#9fe870] hover:bg-[#7fe141]",
        outlined: "bg-white border border-black hover:bg-[#7fe141]",
      },
      size: {
        small: "text-[12px]",
        medium: "text-[16px]",
        large: "text-[24px]",
      },
      width: {
        full: "w-full",
      },
    },
  }
);

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  VariantProps<typeof button>;

function Button({ variant, size, width, children, ...vast }: ButtonProps) {
  return (
    <button className={button({ variant, size, width })} {...vast}>
      {children}
    </button>
  );
}

export default Button;
