import React from 'react'
import TableBody from './TableBody'
import TH from '../Global/TH'

export default function TableContent({roles}) {
    return (
        <>
        <thead>
          <tr>
            <TH name="ID" />
            <TH name="Nombre" />
            <TH name="Acciones" />
          </tr>
        </thead>
        <tbody>
          <TableBody roles={roles}/>
        </tbody>
      </>
    )
}
