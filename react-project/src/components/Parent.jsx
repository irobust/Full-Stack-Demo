import React from 'react'
import Child from './Child'

const Parent = ({items}) => {
    return (
      <>
        { items.map((item)=> (
            <Child {...item} />
        ))}
      </>
    )
}

export default Parent
