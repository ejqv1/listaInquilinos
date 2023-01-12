import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";




const Login = () => {

  const [user,setUserName]=useState('');
  const [password,setPassword]=useState('');

  const login = async (event)=>{
    event.preventDefault();
    console.log("enviando al servidor Login");
    await axios.post("http://localhost:5000/login",{
      email:user,
      password:password
    }).then((response)=>{
      console.log(response.data);

    }).catch((err)=>console.log("error =>",err.response.data.msg))
  }


  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <label className="font-bold text-slate-700">Ingresa tus Credenciales</label>
      <form onSubmit={login} className="my-10">
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">Usuario</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Nombre" 
              value={user} onChange={(event)=>setUserName(event.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Contraseña</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Contraseña"
              value={password} onChange={(event)=>setPassword(event.target.value)}
            />
          </div>
          <div className='mb-5'>
          <label className="font-bold text-slate-500 ">
            <Link to="/crearUsuario">Crea una cuenta</Link>
            </label>
          </div>
          <button
            type='submit'
            className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login