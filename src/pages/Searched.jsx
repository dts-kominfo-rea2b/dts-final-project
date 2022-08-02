import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Searched() {

    const[searchedRecipes, setSearchedRecipes] = useState([]);

    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
            );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);
    
  return (
    <div className='bg-white'>
            <div className='max-w 2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                    <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8' >
                        {searchedRecipes.map((item) => {
                            return(
                                <Card key={item.id}>
                                    <Link to={'/recipe/' + item.id}>
                                        <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 hover:scale-105 ease-in-out duration-300'>
                                            <img src={item.image} alt='' />
                                        </div>
                                            <h4>{item.title}</h4>
                                    </Link>
                                </Card>
                            )
                        })}
                </div>
            </div>
    </div>
  )
}



const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Searched