import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useFetch } from "../hooks/useFetch";
import { useDebounce } from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";

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
  } = useFetch(`${process.env.REACT_APP_API_URL}/games`);
  console.log(allGames);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    if (debouncedSearchTerm && allGames) {
      setFilteredGames(
        
      );
    }
  }, [debouncedSearchTerm, allGames]);
  
  return (
    <>
      <section>
        <div className="text-center">
          <h1 className="title">
            React APP GAMING
          </h1>
          <p className="text-muted subtitle">
          </p>
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

      <section className={styles.games_content}>
        {isPending && <Spinner />}
        {error && <p>{error}</p>}
        {allGames && (
          <GameList items={allGames.slice(0 , 20)} />
        )}
      </section>
      </>
  );
};

export default Home;
