import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import {useNavigate } from 'react-router-dom';

const NewUser = () => {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const navigate = useNavigate();

  const createUser = async(event)=>{
    event.preventDefault();
    await axios.post("http://localhost:5000/createUser",{
      email:email,
      password:password
    });
    navigate("/login");
  }

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <label className="font-bold text-slate-700">Crea tu cuenta</label>
      <form onSubmit={createUser} className="my-10">
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">Usuario Nuevo</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Nombre" 
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Contraseña</label>
            <input
              type="password"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Contraseña"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
            />
          </div>
         
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
          >
            Crear
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewUser