import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { MdLocalDining } from 'react-icons/md';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {
const [user] = useAuthState(auth);
const [nav, setNav] = useState(false);
const [input, setInput] = useState('');
const navigate = useNavigate();
const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/'+input)
};
const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/')
      console.log('You are logged out')
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1640px] mx-auto px-4 text-white'>
        <div className='text-[#df7e00] cursor-pointer'>
            <MdLocalDining size={40} />
        </div>
        {/* <div onClick={() => setNav(!nav)} className='text-black cursor-pointer'>
            <AiOutlineMenu size={30} />
        </div> */}
        <NavLink to={'/'}>
        <h1 className='w-full sm:text-3xl lg:text-4xl px-2 text-2xl text-black cursor-pointer'>My<span className='font-bold text-[#df7e00]'>RECIPE</span></h1></NavLink>
        <form  onSubmit={submitHandler} className='bg-gray-200 rounded-full flex items-center mr-4 ml-4 px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch className='text-black' size={25} />
            <input onChange={(e) => setInput(e.target.value)}
            type='text' 
            value={input} 
            className='bg-transparent p-2 w-full focus:outline-none text-black' placeholder='Search Recipe' />
        </form>
        <ul className='flex text-black p-2'>
            <NavLink to={'/'}>
                <li className='p-4 cursor-pointer hover:text-orange-400'>Home</li>
            </NavLink>
            <NavLink to={'/categoryrecipe'}>
                <li className='p-4 cursor-pointer hover:text-orange-400'>Category</li>
            </NavLink>
            <NavLink to={'/'}>
                <li className='p-4 cursor-pointer hover:text-orange-400'>About</li>
            </NavLink>
        </ul>
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 text-black' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 text-black'}>
            <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
            <h2 className='text-2xl p-4'>CATEGORY<span className='font-bold text-[#df7e00]'>RECIPE</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <NavLink onClick={() => setNav(!nav)} to={'/cuisine/Italian'}>
                    <li className='text-xl py-4 flex'><FaPizzaSlice size={25} className='mr-4' />Italian</li>
                    </NavLink>
                    <NavLink onClick={() => setNav(!nav)} to={'/cuisine/American'}>
                    <li className='text-xl py-4 flex'><FaHamburger size={25} className='mr-4' />American</li>
                    </NavLink>
                    <NavLink onClick={() => setNav(!nav)} to={'/cuisine/Thai'}>
                    <li className='text-xl py-4 flex'><GiNoodles size={25} className='mr-4' />Thai</li>
                    </NavLink>
                    <NavLink onClick={() => setNav(!nav)} to={'/cuisine/Chinese'}>
                    <li className='text-xl py-4 flex'><GiChopsticks size={25} className='mr-4' />Chinese</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
        {user ?  
        <div>
        <NavLink to={'/'}>
        <button onClick={handleLogout} className='bg-[#df7e00] text-white md: flex items-center py-2 rounded-full'>
            <AiOutlineLogout size={20} /> Logout
        </button>
        </NavLink>
        </div> : <div>
        <NavLink to={'login'}>
        <button className='bg-[#df7e00] text-white md: flex items-center py-2 rounded-full'>
            <AiOutlineLogin size={20} /> Login
        </button>
        </NavLink>
        </div>}
    </div>
  )
}

export default Navbar