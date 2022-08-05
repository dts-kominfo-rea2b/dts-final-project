import React from "react";
import { v4 as uuidv4 } from "uuid";
import PrivateComponent from "./PrivateComponent";
import axios from "axios";
import { useState , useEffect} from "react";

const Modal = ({ ingredients }) => {
    const [bookList,setList]=useState([]);


    useEffect(() => {
        axios.get('https://api.rawg.io/api/games?key=6e72e26ea2d545368d46014f44954f74')
        .then(res=>setList(res.data.hits))
        .catch(err=>console.log(err));
        });

    console.log(bookList);
    
    return (
        <>
            
                {bookList.length > 0 && (
                    <ul>
                        {bookList.map(user => (
                                <PrivateComponent>
                                <ul key={uuidv4()} className="ingredient-list">
                                  <li className="ingredient-text">{user.name}</li>
                                  <li className="ingredient-weight">Weight - {user.slug}</li>
                                </ul>
                              </PrivateComponent>
                                                
                        ))}
                    </ul>
                )}         

        </>
    )
};

export default Modal;
