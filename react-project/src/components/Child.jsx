import React from 'react'

const Child = (props) => {
    return (
      <>
        <li key={props.id}>{props.title}</li>
      </>
    )
}

export default Child
