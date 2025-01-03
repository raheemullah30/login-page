import React, { useState } from 'react'
function loginSignup() {
  const [islogin , Setlogin] = useState(true);

  return (
<div className='container'>

<div className="form-container">
<div className='form-toggle'>
  <button className={islogin ? 'active' : ''} onClick={() => Setlogin (true)} >
    Login
  </button>
  <button className={!islogin ? 'active' : ''} onClick={() => Setlogin (false)} >
    Sign up
  </button>
</div>
{
  islogin ? <>
  
  <div className='form'>
    <h2>Login</h2>
 <input type="email" placeholder='Email' />
 <input type="text" placeholder='Password' />
 <a href="#"> Forgot password?</a>
 <button> Login</button>
 <p> Not a member?<a href="#" onClick={()=> Setlogin (false)}>Signup now</a>
 </p>
    </div></> : ""
}
</div>
</div>


  )
}

export default loginSignup
