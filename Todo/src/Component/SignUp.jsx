import React from 'react'

function SignUp() {
  return (
    <>
    
    <div className="signup">
        <h1>SignUp</h1>
        <form>
            <label>Username:</label><br/>
            <input type="text" name="username" required/>
            <br/>
            <label>Email:</label><br/>
            <input type="email" name="email" required/>
            <br/>
            <label>Password:</label><br/>
            <input type="password" name="password" required/>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
    
    </>
  )
}

export default SignUp