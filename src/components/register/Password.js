import React from 'react'
import './register.css'

function Password() {
  return (
    <div className="password">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Reset Password
            </label>
            <input type="email" name="email" placeholder="Email" required="" />
            <button>Reset Password</button>
            <div className="signin">
            <p> Don't have an account?</p><a href='/register' id="reg-link">Sign Up</a>
            </div>
          </form>
        </div>
  )
}

export default Password