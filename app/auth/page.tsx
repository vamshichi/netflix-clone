'use client'
import { useCallback, useState } from "react";
import Input from "../components/input";
import axios from "axios";


const Auth = () =>{
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('')

    const [varient , setVarient] = useState('login')

    const toggleVarient = useCallback(()=>{
        setVarient((currentVarent)=>currentVarent == 'login' ? 'register' : 'login')
    },[])

    const register = useCallback(async()=>{
        try{
          await axios.post("/api/register",{
            data :{
              email,
            password,
            name
        }})
        }catch(error){
          console.log(error);
        }
    },[email , password , name])

    return (
        <div className="relative h-screen w-screen bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
            <div className="bg-black  h-full w-full lg:bg-opacity-40">
               <nav className='px-12 py-15'>
                <h1 className="text-red-600 text-7xl font-bold">NETFLIX</h1>
               </nav>
               <div className="flex justify-center">
                <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                  <h1 className="text-white text-4xl mb-8 font-semibold">
                    {varient == 'login' ? 'sign in' : 'Register'}
                  </h1>
                  <div className="flex flex-col gap-4">
                   { varient == 'register' && ( <Input id = 'name' placeholder="name" type="username"  onChange={(e:any)=>{setName(e.target.value)}} value={name}/>)}
                    <Input  id = 'email' placeholder="email" type="email" onChange={(e:any)=>{setEmail(e.target.value)}} value={email} />
                    <Input id = 'password' placeholder="password" type="password" onChange={(e:any)=>{setPassword(e.target.value)}} value={password} />
                  </div>
                  <button onClick={register} className="bg-red-600 w-full p-3 text-white mt-10 font-semibold rounded-md hover:bg-red-800">
                    { varient == 'login' ? 'sign in' : 'sign up' }
                  </button>
                  <p className="text-neutral-500 mt-12">
                    { varient=='login' ? 'first time using Netflix ?':'Alrady have an account?' }
                    <span onClick={toggleVarient} className="text-white ml-1 hover:underline cursor-pointer">{varient == 'login' ? 'register' : 'login'}</span>
                  </p>
                </div>
               </div>
            </div>
        </div>
    )

}

export default Auth;