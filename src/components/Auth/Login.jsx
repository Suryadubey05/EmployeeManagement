import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
       handleLogin(email,password)
        setEmail("")
        setPassword("")
    }




    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)

                        }}
                        required className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl placeholder:text-gray-400 py-3 px-5' type="email" placeholder='Enter your Email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)

                        }}
                        required className='mt-3 outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl placeholder:text-gray-400 py-3 px-5' type="password" placeholder='Enter your Password' />
                    <button className='mt-7 w-full text-white outline-none hover:bg-emerald-700  border-none bg-emerald-600 rounded-full text-xl placeholder:text-white py-3 px-5' >Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login