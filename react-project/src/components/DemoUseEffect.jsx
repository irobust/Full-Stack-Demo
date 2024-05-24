import React, { useState, useEffect } from 'react'

const Tailwind = () => {
    const [a, seta] = useState('a');
    const [b, setb] = useState('b');

    useEffect(()=>{
        console.log('Set parameter a');
    })

    useEffect(()=>{
        console.log('Set parameter b');
    })
    return (
      <>
        <p>A is {a}</p>
        <p>B is {b}</p>

        <button onClick={() => seta('aa')}>Add more a</button>
        <button onClick={() => setb('bb')}>Add more b</button>
      </>
    )
}

export default Tailwind
