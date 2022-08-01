import React from 'react'
import Category from '../components/Category'

function CatergoryRecipe() {
  return (
    <>
        <div className='flex justify-center mt-8'>
            <h2 className='text-2xl font-bold'>Choose Category Recipes</h2>    
        </div>
        <Category />
    </>
  )
}

export default CatergoryRecipe