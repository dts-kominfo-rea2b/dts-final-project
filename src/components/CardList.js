import react from "react";
import { useState } from "react";
import Modal from "./Modal";


const CardList = ({ buku }) => {

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(buku)
    return (
        <>
            {
                buku.map((item) => {
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
export default CardList;