import { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../../Containers/modal";


// styles
import styles from "./GameItem.module.css";



const GameItem = ({ item: game }) => {
  const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(game)


  return (
    <div className={styles.card} >
      <Link to="#" className={styles.card_header}>
        <img className={styles.thumbnail} src={game.background_image} alt="test" />
      </Link>
      <div className={styles.card_body}>
        <Link to="#" className={styles.title}>
          {game.name}
        </Link>
        <p className={`${styles.description} text-muted`}>
          {game.name}...
        </p>
        <button className={`${styles.description}`} onClick={() => setShow(!show)} >Detail Game</button>
        {show && <Modal bookList={game} />}
      </div>
      
    </div>
  );
};

export default GameItem;
