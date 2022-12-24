import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddInquilino = () => {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [sindicato, setSindicato] = useState("");
  const [celular, setCelular] = useState("");
  const [tutor, setTutor] = useState("");
  const [universidad, setUniversidad] = useState("");
  const navigate = useNavigate();

  const saveInquilino = async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:5000/inquilinos",{
        name:name,
        lastName:lastName,
        sindicato:sindicato,
        phone:parseInt(celular),
        tutor:tutor,
        university:universidad
    });
    navigate("/");
  }

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <label className="font-bold text-slate-700">Nuevo Inquilino</label>
      <form onSubmit={saveInquilino} className="my-10">
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">Nombre</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Nombre" value={name} onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Apellido</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Apellido" value={lastName} onChange={(e)=>setlastName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Sindicato</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Sindicato" value={sindicato} onChange={(e)=>setSindicato(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Celular</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Celular" value={celular} onChange={(e)=>setCelular(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Tutor</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Tutor" value={tutor} onChange={(e)=>setTutor(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Universidad</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Universidad" value={universidad} onChange={(e)=>setUniversidad(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInquilino;
