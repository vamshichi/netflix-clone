'use server'

import bcrypt from 'bcrypt'
import { NextApiRequest , NextApiResponse } from 'next'
import prismadb from '@/app/lib/prismadb'


 const handler = async(req: NextApiRequest , res : NextApiResponse)=>{
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }
     try{
       const {email , password , name} = req.body;
       
       const existinguser = await prismadb.user.findUnique({
        where :{
            email
        }
       })

       if(existinguser){
        return res.status(422).json({
            error : 'email taken'
        })
       }

       const hashedPassword = await bcrypt.hash(password,12)

       const user = await prismadb.user.create({
        data : {
            email,
            name,
            hashedPassword,
            image : '',
            emailVerified : new Date()
        }
       })

       return res.status(200).json({
        message : 'created sucessfully',
        user
       })

     }catch(error){
        return res.status(400).end()
     }
}

export default handler;