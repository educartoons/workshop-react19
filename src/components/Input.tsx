import { ChangeEvent } from "react";

interface InputProps {
  source: "origin" | "final";
  value: string;
  setAmount1: React.Dispatch<React.SetStateAction<string>>;
  setAmount2: React.Dispatch<React.SetStateAction<string>>;
}

const RATE = 0.8839;

function Input(props: InputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const cleanedValue = value.replace(/[^0-9.,]+/g, "");

    if (props.source === "origin") {
      props.setAmount1(cleanedValue);
      const result = (Number(cleanedValue.replace(/,/, "")) * RATE).toFixed(2);
      props.setAmount2(result);
    } else {
      props.setAmount2(cleanedValue);
      const result = (Number(cleanedValue.replace(/,/, "")) / RATE).toFixed(2);
      props.setAmount1(result);
    }
  };
  return (
    <div className="relative">
      <input
        className="border border-zinc-600 h-[72px] w-full rounded-xl hover:border-2 focus:border-[3px] focus:border-zinc-950 px-4 outline-0 ease-in transition-all duration-200 font-semibold text-xl"
        inputMode="decimal"
        type="text"
        onChange={handleChange}
        value={props.value}
      />
    </div>
  );
}

export default Input;
