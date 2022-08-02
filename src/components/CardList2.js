import react from "react";
import { useState } from "react";
import Modal from "./Modal";


const CardList2 = ({ seller }) => {

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(seller)
    return (
        <>
            {
                seller.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    if(thumbnail!= undefined)
                    {
                        return (
                            <>
                            <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">Detail</p>
                                </div>
                            </div>
                              <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )
                    }
                    
                })
            }

        </>
    )
}
export default CardList2;