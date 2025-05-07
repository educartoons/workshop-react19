import { useEffect, useReducer, useState } from "react";
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

interface IState {
  value: number;
}

interface IAction {
  type: "next" | "prev" | "sum";
  payload?: number;
}

function reducer(state: IState, action: IAction) {
  console.log(action);
  switch (action.type) {
    case "next":
      return {
        value: state.value + 1,
      };
    case "prev":
      return {
        value: state.value - 1,
      };
    case "sum":
      return {
        value: state.value + action.payload!,
      };
    default:
      break;
  }
  return state;
}

export default function Pokedex() {
  const [data, setData] = useState<IPokemon | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [state, dispatch] = useReducer(reducer, {
    value: 1,
  });

  const fetchPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${state.value}`
    );
    if (response.ok) {
      const data = await response.json();
      setData(data);
    } else {
      setError("Error");
    }
  };

  const handlePrev = () => {
    if (state.value - 1 > 0) {
      dispatch({
        type: "prev",
      });
    }
  };

  const handleNext = () => {
    dispatch({
      type: "sum",
      payload: 10,
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, [state.value]);

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
