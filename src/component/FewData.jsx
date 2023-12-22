import React from 'react'

function FewData(props) {
  return (
    <>
        {/* <h1>Selected Data</h1> */}

        <tr>
            <td>{props.fewDataNo}</td>
            <td>{props.fewDataAge}</td>
            <td>{props.fewDataEmail}</td>
        </tr>
    </>
  )
}

export default FewData