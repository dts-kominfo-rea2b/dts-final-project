import React from 'react';
import Category from '../components/Category';
import { motion } from 'framer-motion';

function CatergoryRecipe() {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        <div className='flex justify-center mt-8'>
            <h2 className='text-4xl font-bold text-[#df7e00]'>Choose Category Cuisines</h2>    
        </div>
        <Category />
    </motion.div>
  )
}

export default CatergoryRecipe