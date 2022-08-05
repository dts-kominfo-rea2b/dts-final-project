import { useState, useEffect } from "react";
import axios from 'axios';
import Carousel from 'better-react-carousel'


// styles
import styles from "./corousel.css";



const UncontrolledExample = () => {
  const [bookList,setList]=useState([]);
    useEffect(() => {
        axios.get('https://api.rawg.io/api/games?key=c081ece3d564465e863515d149c45031')
        .then(res=>setList(res.data.results))
        .catch(err=>console.log(err));
        });

    console.log(bookList);
      return (
        <>  
          <section>
            <div className="text-center">
           
            </div> 
            <br></br>
                {bookList.length > 0 && (
                    <Carousel cols={2} rows={1} gap={10} loop>
                        {bookList.map(user => (
                          <Carousel.Item>
                            <img src={user.background_image}  alt={user.name} className="img" />
                          </Carousel.Item>
                                                
                        ))}
                    </Carousel>
                )}
                <section className={styles.games_content}>
                    
                </section>         
          </section>
        </>
      )
}

export default UncontrolledExample;
