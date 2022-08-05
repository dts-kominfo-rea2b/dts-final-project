import { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";




// styles
import styles from "./GameItem.module.css";


const GameItem = ({ item: game }) => {
  const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(game)


  return (
    <div className={styles.card} >
      <div className={styles.card_header}>
        <img className={styles.thumbnail} src={game.background_image} alt="test" />
      </div>
      <div className={styles.card_body}>
        <Link to="#" className={styles.title}>
          {game.name}
        </Link>
        <p className={`${styles.description} text-muted`}>
          {game.slug}...
        </p>
        <p className={`${styles.description} text-muted`}>
          {game.released}
        </p>
        <p className={`${styles.description} text-muted`}>
          {game.rating}
        </p>
      </div>
      
    </div>
  );
};

export default GameItem;
