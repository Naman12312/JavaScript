import React from 'react'

const Contact = () => {
  return (
    <div className="container">
        <form method='POST'>
            <input type="email" />
            <input type="password" />
            <button className='btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default Contact