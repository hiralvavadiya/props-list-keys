import React from 'react'

function AllData(props) {
  return (
    <>
    <h1>All Data</h1>
        <table cellPadding={10} cellSpacing={2} border={1}>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
            {
                props.jotuChe.map((data)=>{
                    return (
                        <tr>
                            <td>{data.no}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.email}</td>
                        </tr>
                    )
                })
            }

        </table>
    </>
  )
}

export default AllData