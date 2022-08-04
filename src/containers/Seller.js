import React from 'react';
import {useState, useEffect}from "react";
import CardList2 from "../components/CardList2";
import axios from "axios";

function Seller() {
    const [bestSeller,setSeller]=useState([]);


    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=seller&key=AIzaSyA_k9t7PMId9hx0Gx8GerN5SdXIvVV82Xs'+'&maxResults=18')
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