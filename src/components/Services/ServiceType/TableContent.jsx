import React from 'react'
import TH from '../../Global/TH'
import TableBody from './TableBody'

export default function TableContent({serviceTypes}) {
  console.log(serviceTypes)
    return (
        <>
        <thead>
          <tr>
            <TH name="ID" />
            <TH name="Nombre" />
            <TH name="Precio" />
            <TH name="Acciones" />
          </tr>
        </thead>
        <tbody>
            <TableBody serviceTypes={serviceTypes}/>
        </tbody>
      </>
    )
}
