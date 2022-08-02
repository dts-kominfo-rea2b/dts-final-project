import React from 'react';
import {useState, useEffect}from "react";
import CardList from "../components/CardList";
import axios from "axios";

function BooksList() {
    const [bookList,setList]=useState([]);


    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=popular&key=AIzaSyDsLPlx4HA1Usxq9m7Gs-nWVRAXRgnFbIY'+'&maxResults=40')
        .then(res=>setList(res.data.items))
        .catch(err=>console.log(err));
        });

    console.log(bookList);
        return (
            <div className="container">
            {
                <CardList buku={bookList}/>
            }
            </div>
        )
}

export default BooksList