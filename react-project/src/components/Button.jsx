import React, {useState} from 'react'

const Button = ({label}) => {
    const [count, setCount] = useState(0);

    const handleIncrement = (e) => {
      setCount(count + 1);
      console.log(e);
    }

    const handleDecrement = () => {
      setCount(count - 1);
    }

    return (
      <>
        <p>Count: {count}</p>
        <button onClick={(e) => setCount(count + 1)}>{label}</button>
        <button onClick={handleDecrement}>Decrement</button>
      </>
    )
}

export default Button
