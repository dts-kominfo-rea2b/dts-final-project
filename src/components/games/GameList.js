// styles
import styles from "./GameList.module.css";
import GameItem from "./GameItem";
import Modal from "../../Containers/modal";
import { useState } from "react";

const GameList = ({ items }) => {
  const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
  return (
    <div className={styles.grid} onClick={()=>{setShow(true);setItem(items)}}>
      {items.map((game) => (
        <>
        <GameItem key={game.id} item={game} />
        <Modal show={show} item={game} onClose={() => setShow(false)} />
        </>
      ))}
    </div>
  );
};

export default GameList;
