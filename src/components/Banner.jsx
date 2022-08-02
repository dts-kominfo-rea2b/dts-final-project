import React from 'react';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Banner() {
  const [user] = useAuthState(auth);
  return (
    <div className="relative bg-black overflow-hidden">
    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div className="sm:max-w-lg">
          <h2 className="text-2xl font font-extrabold tracking-tight text-gray-200 sm:text-4xl">All Your Food. One Place.</h2>
          <p className="mt-4 text-l text-gray-300">Find and share everyday cooking inspiration on Allrecipes. Discover recipes, cooks and how-tos based on the food you love and the friends you follow.</p>
        </div>
        <div>
          <div className="mt-10">
            <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                      <img src="https://spoonacular.com/recipeImages/632593-556x370.jpg" alt="" className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://spoonacular.com/recipeImages/664708-556x370.jpg" alt="" className="w-full h-full object-center object-cover" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://spoonacular.com/recipeImages/636589-556x370.jpg" alt="" className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://spoonacular.com/recipeImages/636080-556x370.jpg" alt="" className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://spoonacular.com/recipeImages/642540-556x370.jpg" alt="" className="w-full h-full object-center object-cover" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://spoonacular.com/recipeImages/664311-556x370.jpg" alt="" className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://spoonacular.com/recipeImages/715493-556x370.jpg" alt="" className="w-full h-full object-center object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {user ? <a href="/categoryrecipe" className="inline-block text-center bg-orange-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-orange-700">Find Now</a> : <a href="/register" className="inline-block text-center bg-orange-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-orange-700">Start Now</a> }
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner