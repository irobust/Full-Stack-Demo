import React, { useRef } from 'react'

const Form = () => {
    const firstname = useRef();
    const lastname = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Firstname is ', firstname.current.value);
        console.log('Lastname is ', lastname.current.value);
    }

    return (
      <form onSubmit={submitHandler}>
        <input ref={firstname} type='text' placeholder='firstname'/>
        <input ref={lastname} type='text' placeholder='lastname'/>
        <button>Register</button>
      </form>
    )
}

export default Form
