import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import React from 'react'

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
            );
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData); 
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

  return (
    <>
        <div className='mt-6 p-8 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-1'>
        <h2 className='pb-6 text-4xl font-bold text-[#df7e00]'>{details.title}</h2>
            <div className='w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
                <img src={details.image} alt='' />
            </div>
            <div className='py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:pr-8'>
                <div className='justify-center '>
                    <div className='pb-4'>
                        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instruction</Button>
                        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
                    </div>
                    {activeTab === 'instructions' && ( 
                    <div className='space-y-6'>
                        <h2 className='text-2xl font-bold p-2'>Instructions</h2>
                        <p className='text-base text-gray-900' dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                        <p className='text-base text-gray-900' dangerouslySetInnerHTML={{ __html: details.instructions}}></p>    
                    </div>
                    )}
                    {activeTab === 'ingredients' && (
                    <>
                    <h2 className='text-2xl font-bold p-2'>Ingredients</h2>
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                    </>     
                    )}
                </div> 
            </div>  
        </div>
    </>
  )
}



const Button = styled.button`
padding: 0.5rem 1rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
&.active{
    background: #df7e00;
    color: white;
}
`



export default Recipe