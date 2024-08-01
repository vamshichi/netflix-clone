import React from "react";

interface InputProps{
    id : string,
    type?: string,
    placeholder : string,
    onChange : any,
    value : string
}

const Input : React.FC<InputProps> = ({placeholder,type,value,onChange,id}) =>{
    return (
        <input 
        id = {id}
        className="
        block
        rounded-md
        p-3
        w-full
        text-md
        text-white
        bg-neutral-700
        appearance-none
        focus:outline-none
        focus:ring-0
        "
        placeholder={placeholder}
        type ={type}
        value={value}
        onChange={onChange}
        
        />
    )
}

export default Input; 