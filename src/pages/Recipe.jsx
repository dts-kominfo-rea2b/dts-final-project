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
        <h2 className='pb-6 text-2xl font-bold text-[#df7e00]'>{details.title}</h2>
            <div className='hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hhidden lg:block'>
                <img src={details.image} alt='' />
            </div>
            <div className='py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
                <div className='justify-center '>
                    <div className='pb-4'>
                        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instruction</Button>
                        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
                    </div>
                    {activeTab === 'instructions' && ( 
                    <div className='space-y-6'>
                        <p className='text-base text-gray-900' dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                        <p className='text-base text-gray-900' dangerouslySetInnerHTML={{ __html: details.instructions}}></p>    
                    </div>
                    )}
                    {activeTab === 'ingredients' && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>     
                    )}
                </div> 
            </div>  
        </div>
    </>
  )
}

// const DetailWrapper = styled.div`
// margin-top: 10rem;
// margin-bottom; 5rem;
// display: flex;
// h2 {
//     margin-bottom: 2rem;
// }
// li {
//     font-size: 1.2rem;
//     line-height: 2.5rem;
// }
// ul {
//     margin-top: 2rem;
// }
// `

const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
.active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
}
`

// const Info = styled.div`
// margin-left: 10rem;
// `

export default Recipe