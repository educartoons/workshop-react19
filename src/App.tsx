import { ChangeEvent, useState, useCallback, useMemo } from "react";
import Calculator from "./components/Calculator";
import { items } from "./utils/utils";

// memo, useCallback, useMemo

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(items);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => item.filtered === true);
  }, [products]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, []);

  return (
    <div className="w-[500px] mx-auto mt-10">
      <div className="mb-4">
        <input
          onChange={handleChange}
          value={searchTerm}
          className="border border-zinc-600 h-[72px] w-full rounded-xl hover:border-2 focus:border-[3px] focus:border-zinc-950 px-4 outline-0 ease-in transition-all duration-200 font-semibold text-xl"
          type="text"
        />
      </div>
      <Calculator handleChange={handleChange} />
    </div>
  );
}

export default App;
