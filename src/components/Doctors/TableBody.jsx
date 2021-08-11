import React from 'react'
import TD from '../Global/TD'

export default function TableBody({doctors}) {
    console.log(doctors)
    return (
        <>
        {doctors.doctor && doctors.doctor.map((doc)=>(
            <tr key={doc.id}>
                <TD name={doc.users?.names}/>
                <TD name={doc.jvpmv}/>
                <TD name={doc.cellphone}/>
                <TD name={doc.phone}/>
                <TD>
                <div className="flex">
                <button
                  className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded"
                >
                  Editar
                </button>
                <button className="bg-red-500 text-white text-xs px-6 m-1 py-1 rounded">
                  Eliminar
                </button>
              </div>
                </TD>
            </tr>
        ))}
        </>
    )
}
