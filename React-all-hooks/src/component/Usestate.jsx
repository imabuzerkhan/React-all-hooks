import React, { useState } from 'react'

const Usestate = () => {
const [count , useCount] = useState(0)

  return (
    <div>
      <div className="container">
        <div className="count">
          <h1>{count}</h1>
        </div>
        <button onClick={()=> useCount(count+2) } >Add </button>
        <button onClick={()=> {count === 0 ? useCount(0): useCount(count-1) } } >Sub </button>

      </div>
    </div>
  )
}

export default Usestate
