import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useFetch } from "../hooks/useFetch";
import { useDebounce } from "../hooks/useDebounce";
import UncontrolledExample from "../components/layout/corousel";


// styles
import styles from "./Home.module.css";

import GameList from "../components/games/GameList";
import Spinner from "../components/ui/Spinner";

const Home = () => {
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: allGames,
    isPending,
    error,
  } = useFetch('https://api.rawg.io/api/games?key=6e72e26ea2d545368d46014f44954f74');
  
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    if (debouncedSearchTerm && allGames) {
      setFilteredGames(
        allGames.filter((game) =>
          game.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
      );
    }
  }, [debouncedSearchTerm, allGames]);
  
  return (
    <>
      <section>
        <div className="text-center">
          <h1 className="title">
            Koleksi Game Ku 
          </h1>
         
        </div>
        <form className={styles.form}>
          <label>
            <BiSearch className={styles.search_icon} />
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              placeholder="silahkan cari disini game yang anda suka"
              className={styles.input}
            />
          </label>
        </form>
        {debouncedSearchTerm && filteredGames.length === 0 && (
          <p className="text-center">Sorry, no games found :(</p>
        )}
      </section>
      <section >
        <UncontrolledExample/>
      </section>
      <section className={styles.games_content}>
        {isPending && <Spinner />}
        {error && <p>{error}</p>}
        {allGames && (
          <GameList items={debouncedSearchTerm ? filteredGames : allGames} />
        )}
      </section>
      
    </>
  );
};

export default Home;
