import React from 'react'

const NewUser = () => {
  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <label className="font-bold text-slate-700">Crea tu cuenta</label>
      <form className="my-10">
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">Usuario Nuevo</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Nombre" 
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Contraseña</label>
            <input
              type="password"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Contraseña"
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Confirma la Contraseña</label>
            <input
              type="password"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Confirma la contraseña"
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