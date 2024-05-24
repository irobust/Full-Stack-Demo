import React, { useState } from 'react'

const Toggle = () => {
    const [showMessage, setShowMessage] = useState(false);
    const toggleMessage = () => {
        setShowMessage(!showMessage);
    }

    return (
      <div>
        <button onClick={toggleMessage}>{showMessage ? 'Hide Message': 'Show Message'}</button>
        {showMessage && <p>This message will be removed</p>}
      </div>
    )
}

export default Toggle