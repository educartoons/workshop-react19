import { IPokemon } from "./Pokedex";

interface CardProps {
  data: IPokemon | null;
  error: string | null;
}

export default function Card({ data, error }: CardProps) {
  if (!data) return <div>Something went wrong!</div>;

  if (error) return <div>Something went wrong!</div>;

  return (
    <div className="w-[400px]">
      <img
        className="w-full"
        src={data.sprites.other["official-artwork"].front_default}
        alt=""
      />
    </div>
  );
}
