import Pokedex from "./components/Pokedex";

function display<T>(value: T) {
  alert(value);
}

function App() {
  display("Hello");
  return (
    <div className="w-[1200px] mx-auto mt-20">
      <Pokedex />
    </div>
  );
}

export default App;
