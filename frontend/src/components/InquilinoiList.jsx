import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR,{useSWRConfig} from "swr";

const InquilinoiList = () => {
    const {mutate} = useSWRConfig();
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/inquilinos");
    return response.data;
  };

  const { data } = useSWR("inquilinos", fetcher);
  if (!data) {
    return <h2>Loading.....</h2>;
  }

  const deleteInquilino= async (inquilinoId)=>{
    await axios.delete(`http://localhost:5000/inquilinos/${inquilinoId}`);
    mutate('inquilinos');
  }

  return (
    <div className="flex flex-col mt-5">
      <div className="w-ful">
        <Link
          to="/add"
          className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg"
        >
          Add New
        </Link>
        <div className="relative shadow rounded-lg mt-3">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6">Nombre</th>
                <th className="py-3 px-6">Apellido</th>
                <th className="py-3 px-6">Sindicato</th>
                <th className="py-3 px-6">Celular</th>
                <th className="py-3 px-6">Tutor</th>
                <th className="py-3 px-6">Universidad</th>
                <th className="py-3 px-1 text-center">Propiedades</th>
              </tr>
            </thead>
            <tbody>
              {data.map((inquilino, index) => (
                <tr className="bg-white border-b" key={inquilino.id}>
                  <td className="py-3 px-1 text-center">{index+1}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">
                    {inquilino.name}
                  </td>
                  <td className="py-3 px-6">{inquilino.lastName}</td>
                  <td className="py-3 px-6">{inquilino.sindicato}</td>
                  <td className="py-3 px-6">{inquilino.phone}</td>
                  <td className="py-3 px-6">{inquilino.tutor}</td>
                  <td className="py-3 px-6">{inquilino.university}</td>
                  <td className="py-3 px-1 text-center">
                    <Link
                      to={`/edit/${inquilino.id}`}
                      className="font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1"
                    >
                      Edit
                    </Link>
                    <button onClick={()=>deleteInquilino(inquilino.id)} className="font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white mr-1">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InquilinoiList;
