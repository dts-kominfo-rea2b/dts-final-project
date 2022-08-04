import React from 'react';
import {useState, useEffect}from "react";
import CardList from "../components/CardList";
import axios from "axios";

function BooksList() {
    const [bookList,setList]=useState([]);


    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=popular&key=AIzaSyCPD4YYdJVlbDmXv7MEXGuZ1mlsZ-5Dobo'+'&maxResults=18')
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