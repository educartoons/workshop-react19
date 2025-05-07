import { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";

export interface IPokemon {
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export default function Pokedex() {
  const [pokemonId, setPokemonId] = useState(1);
  const [data, setData] = useState<IPokemon | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    if (response.ok) {
      const data = await response.json();
      setData(data);
    } else {
      setError("Error");
    }
  };

  const handlePrev = () => {
    if (pokemonId - 1 > 0) {
      setPokemonId(pokemonId - 1);
    }
  };

  const handleNext = () => {
    setPokemonId(pokemonId + 1);
  };

  useEffect(() => {
    fetchPokemon();
  }, [pokemonId]);

  return (
    <div>
      <div className="flex gap-2">
        <Button variant="solid" onClick={handlePrev}>
          Prev
        </Button>
        <Button variant="solid" onClick={handleNext}>
          Next
        </Button>
      </div>
      <Card error={error} data={data} />
    </div>
  );
}
