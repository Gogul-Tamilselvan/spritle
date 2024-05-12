/* eslint-disable no-unused-vars */
import React from 'react'

export default function Loading() {
  return (
    <div>
    <table className="table table-striped border">
            <thead>
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">NAME</th>
                <th className="col" scope="col">
                  type
                </th>
                <th scope="col">QUERY</th>
                <th scope="col">MESSAGE</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>Loading</td>
                <td>Loading</td>
                <td>Loading</td>
                <td>Loading</td>
                <td>Loading</td>
            </tr>
            </tbody>
            </table>
    </div>
  )
}
