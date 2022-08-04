import {useState}from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=18')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    
    return(
        <>
            <div className="header">
                <div className="row2">
                    <h1>With The Book<br/> We Think Global Act Local</h1>
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>
            
            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
            {/* <div className="container">
                {
                    <Card book={bookList}/>
                }
            </div> */}
        </>
    )
}
export default Main;