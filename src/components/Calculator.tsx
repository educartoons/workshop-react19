import { MouseEvent, useState } from "react";
import { LockKeyhole } from "lucide-react";
import Input from "./Input";
import Badge from "./Badge";
import Button from "./Button";

const RATE = 0.8839;

function Calculator() {
  const [amount1, setAmount1] = useState<string>("1000");
  const [amount2, setAmount2] = useState<string>(String(1000 * RATE));

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("hey");
    event.preventDefault();
    alert("Comparar comisiones");
  };

  return (
    <form className="w-full p-10 rounded-xl shadow-[0_10px_32px_0_rgba(0,0,0,0.15),0_40px_40px_0_rgba(0,0,0,0.04)]">
      <div className="mb-8">
        <p className="text-sm font-semibold flex justify-center items-center gap-2">
          <LockKeyhole size={18} />
          Tipo de cambio garantizado (8 h)
        </p>
        <div className="text-center mt-3">
          <Badge text="1 USD = 0,8839 EUR" />
        </div>
      </div>
      <div className="mb-6">
        <span className="text-sm font-semibold">Envías exactamente</span>
        <Input
          setAmount1={setAmount1}
          setAmount2={setAmount2}
          value={amount1}
          source="origin"
        />
      </div>
      <div>
        <span className="text-sm font-semibold">El destinatario recibe</span>
        <Input
          setAmount1={setAmount1}
          setAmount2={setAmount2}
          value={amount2}
          source="final"
        />
      </div>
      <div className="flex justify-between mt-10">
        <Button onClick={handleClick} variant="outlined">
          Compara comisiones
        </Button>
        <Button variant="solid">Envía dinero</Button>
      </div>
    </form>
  );
}

export default Calculator;
