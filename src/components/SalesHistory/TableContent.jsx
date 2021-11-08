import React from 'react'
import TH from '../Global/TH'
import TableBody from './TableBody'

export default function TableContent({sales}) {
    return (
        <>
              <thead>
          <tr>
            <TH name="ID" />
            <TH name="Fecha" />
            <TH name="Total" />
            <TH name="Acciones" />
          </tr>
        </thead>
        <tbody>
            <TableBody sales={sales}/>
        </tbody>
        </>
    )
}
