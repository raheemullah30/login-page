import React, { useState } from 'react'
function loginSignuo() {
  const [islogin , Setlogin] = useState(true)

  return (
    
<div className='container'>

<div className="form-container">
<div className='form-toggle'>
  <button className={islogin ? 'active' : ""} onClick={() => Setlogin (true)} >
    Login
  </button>
  <button className={!islogin ? 'active' : ""} onClick={() => Setlogin (true)} >
    Sign up
  </button>
</div>
</div>
</div>


  )
}

export default loginSignuo
