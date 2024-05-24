import React from 'react'

const Tailwind = () => {
    return (
      <>
        <h1 className="text-3xl font-bold text-primary-500/50 hover:text-primary-500">Hello Tailwind!</h1>
        <div className="grid grid-cols-4">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div>06</div>
            <div>07</div>
            <div>08</div>
            <div>09</div>
            <div className="col-span-3 bg-green-100">10</div>
        </div>
      </>
    )
}

export default Tailwind
