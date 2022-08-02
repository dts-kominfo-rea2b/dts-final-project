import React from 'react'
import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    },[]);

    const getVeggie = async () => {

        const check = localStorage.getItem('veggie');

        if(check){
            setVeggie(JSON.parse(check));
        }else{
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
                );
            const data = await api.json();

            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            console.log(data.recipes);
        }


    };
  return (
    <>
        <div className='px-10 py-10'>
                    <h3 className='px-4 text-4xl font-bold text-[#df7e00]'>Vegetarian Picks</h3>

                    <Splide 
                        options={{
                            perPage: 4,
                            arrows: false,
                            pagination: false,
                            drag: 'free',
                            gap: '2rem',
                        }}>
                    {veggie.map((recipe) => {
                        return(
                            <SplideSlide key={recipe.id}>
                                <div className='relative flex items-center'>
                                        <Link to={'/recipe/' + recipe.id}>
                                            <img className='rounded-lg w-full h-full inline-block p-2 pt-4 cursor-pointer hover:scale-105 ease-in-out duration-300' src={recipe.image} alt={recipe.title} />
                                            <p className='text-l px-2 pt-2'>{recipe.title}</p>
                                        </Link>
                                </div>
                            </SplideSlide>
                        )
                    })}
                    </Splide>
        </div>
    </>
  )
}



// const Card = styled.div`
//     min-height: 25rem;
//     border-radius: 2rem;
//     overflow: hidden;
//     position: relative;

//     img{
//         border-radius: 2rem;
//         position: absolute;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
        
//     }
//     p{
//         position: absolute;
//         z-index: 10;
//         left: 50%;
//         bottom: 0%;
//         transform: translate(-50%, 0%);
//         color: white;
//         width: 100%;
//         text-align: center;
//         font-weight: 600;
//         font-size: 1rem;
//         height: 40%;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//     }
// `;



export default Veggie