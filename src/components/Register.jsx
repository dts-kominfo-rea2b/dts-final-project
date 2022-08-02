import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'; 

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {createUser} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await createUser(email, password)
            navigate('/account')
        } catch (error) {
            setError(error.message)
            console.log(error)
        }
    }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2 text-[#df7e00]'>Register to your account</h1>
        <p className='py-2'>Already have an account yet ? <Link to='/login' className='underline'>Login</Link></p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type="email" />
        </div>
        <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Passsword</label>
            <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type="password" />
            {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
        </div>
        <button className='border-orange-500 bg-orange-600 hover:bg-orange-500 w-full p-4 my-2 text-white'>Register</button>
      </form>
    </div>
  )
}

export default Register