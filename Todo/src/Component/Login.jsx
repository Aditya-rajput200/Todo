import React from 'react'

function auth() {
  return (
    <>
    <div className="login">
        <h1>Login</h1>
        <form onSubmit={handelLogin}>
            <label>Username:</label><br/>
            <input type="text" name="username" required/>
            <br/>
            <label>Password:</label><br/>
            <input type="password" name="password" required/>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
        <p> Donot have an account? <a href="/register">Register</a></p>
    </div>
    
    
    </>

  )
}

export default auth