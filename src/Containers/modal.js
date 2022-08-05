import react from "react";
import PrivateComponent from "./PrivateComponent";
import styles from "./modal.css";

const Modal=({show,item,onClose})=>{
    if(!show)
    {
        return null;
    }
    return(
        <>
        <PrivateComponent>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}>X</button>
                    <div className="inner-box">
                        <img src={item.background_image} alt="" />
                        <div className="info">
                            <h1>{item.name}</h1>
                            <h3>{item.released}</h3>
                            <h4>{item.slug}</h4><br/>
                        </div>
                    </div>
                </div>
            </div>
        </PrivateComponent>
        </>
    )
}
export default Modal;

