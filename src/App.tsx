import Button from "./components/Button";
import Calculator from "./components/Calculator";

// memo, useCallback, useMemo

function App() {
  return (
    <div className="w-[1200px] mx-auto mt-20">
      <div className="flex">
        <div className="pr-20 pt-26">
          <h1 className="font-extrabold uppercase text-6xl">
            Envía dinero <br /> globalmente <br /> por menos
          </h1>
          <p className="font-semibold">
            Mueve tu dinero a donde importa. Ahorra en transferencias
            internacionales en más de 50 divisas, sin comisiones ocultas.
          </p>
          <div className="mt-4">
            <Button variant="solid">Abre una cuenta</Button>
          </div>
        </div>
        <div className="min-w-[500px]">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
