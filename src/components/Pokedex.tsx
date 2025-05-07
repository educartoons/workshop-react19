import { useReducer } from "react";
import Card from "./Card";
import Button from "./Button";
import useFetch from "../hooks/useFetch";

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
  const [state, dispatch] = useReducer(reducer, {
    value: 1,
  });
  const { data, error } = useFetch<{
    data: IPokemon | undefined;
    error: string | undefined;
  }>(`https://pokeapi.co/api/v2/pokemon/${state.value}`, {
    data: undefined,
    error: undefined,
  });

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
