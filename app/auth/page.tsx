'use client'
import { useState } from "react";
import Input from "../components/input";

const Auth = () =>{
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('')

    return (
        <div className="relative h-screen w-screen bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
            <div className="bg-black  h-full w-full lg:bg-opacity-40">
               <nav className='px-12 py-15'>
                <h1 className="text-red-800 text-7xl font-bold">NETFLIX</h1>
               </nav>
               <div className="flex justify-center">
                <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                  <h1 className="text-white text-4xl mb-8 font-semibold">
                    sign in
                  </h1>
                  <div className="flex flex-col gap-4">
                    <Input placeholder="name" type="username" onChange={(e:any)=>{setName(e.target.value)}} value={name}/>
                    <Input placeholder="email" type="email" onChange={(e:any)=>{setEmail(e.target.value)}} value={email} />
                    <Input placeholder="password" type="password" onChange={(e:any)=>{setPassword(e.target.value)}} value={password} />
                  </div>
                  <button className="bg-red-900 w-full p-3 text-white mt-6 font-semibold rounded-md">
                    sign up
                  </button>
                </div>
               </div>
            </div>
        </div>
    )

}

export default Auth;