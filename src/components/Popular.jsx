import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    },[]);

    const getPopular = async () => {

        const check = localStorage.getItem('popular');

        if(check){
            setPopular(JSON.parse(check));
        }else{
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
                );
            const data = await api.json();

            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
        }


    };

  return (
    <>
        <div className='bg-white'>
            <div className='max-w 2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                <h3 className='px-4 text-4xl font-bold text-[#df7e00]'>Popular Picks</h3>
                    <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8' >
                    {popular.map((recipe) => {
                        return(
                                    <a href={'/recipe/' + recipe.id} className='group' key={recipe.id}>
                                        <Link to={'/recipe/' + recipe.id}>
                                            <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 hover:scale-105 ease-in-out duration-300'>
                                                <img src={recipe.image} alt={recipe.title} />
                                            </div>
                                                <h3 className='mt-4 text-sm text-gray-700'>{recipe.title}</h3>
                                        </Link>
                                    </a>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Popular;