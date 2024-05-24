import React, { useState } from 'react'

const Menu = () => {
    const [items] = useState(["Item 1", "Item 2", "Item 3"]);
    console.log(items)
    return (
      <>
        <h1>Menu Items</h1>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
      </>
    )
}

export default Menu
