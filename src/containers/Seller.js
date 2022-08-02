import React from 'react';
import {useState, useEffect}from "react";
import CardList2 from "../components/CardList2";
import axios from "axios";

function Seller() {
    const [bestSeller,setSeller]=useState([]);


    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=seller&key=AIzaSyDsLPlx4HA1Usxq9m7Gs-nWVRAXRgnFbIY'+'&maxResults=40')
        .then(res=>setSeller(res.data.items))
        .catch(err=>console.log(err));
        });

    console.log(bestSeller);
        return (
            <div className="container">
            {
                <CardList2 seller={bestSeller}/>
            }
            </div>
        )
}

export default Seller