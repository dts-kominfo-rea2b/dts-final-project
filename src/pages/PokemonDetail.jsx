import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PokemonDetail() {
  const { pokemon } = useParams();

  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `${pokemon} - Pokébot`;
  });

  return (
    <div>
      <h1>Pokemon Detail</h1>
    </div>
  )
}