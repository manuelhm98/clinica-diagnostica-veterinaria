import React from 'react'

export default function Details({vendor}) {
    return (
        <div>
            <p><span className="text-lg font-medium">Nombre:</span> {vendor?.name}</p>
            <p><span className="text-lg font-medium">Nombre de vendedor:</span> {vendor?.nameVendor}</p>
            <p><span className="text-lg font-medium">Telefono:</span> {vendor?.phone}</p>
            <p><span className="text-lg font-medium">Celular:</span> {vendor?.celPhone}</p>
            <p><span className="text-lg font-medium">Banco:</span> {vendor?.bank}</p>
            <p><span className="text-lg font-medium">Numero de banco:</span> {vendor?.nBank}</p>
            <p><span className="text-lg font-medium">Direccion:</span> {vendor?.addres}</p>
        </div>
    )
}
