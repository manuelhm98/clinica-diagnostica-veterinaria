import React from 'react'
import TableBody from './TableBody'
import TH from '../Global/TH'

export default function TableContent({shifts}) {
    return (
        <>
        <thead>
          <tr>
            <TH name="ID" />
            <TH name="Turno" />
            <TH name="Acciones" />
          </tr>
        </thead>
        <tbody>
          <TableBody shifts={shifts}/>
        </tbody>
      </>
    )
}
