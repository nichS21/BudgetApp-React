import { useState } from 'react'

import './css/App.css'
import './css/index.css'

function App() {
  // const [count, setCount] = useState<number>(0)
  const bodyText: string = 
  `Making Money 
    Work for 
    You Starts
    With a Budget`;

  return (
    <>
    {/* <div className="container-login-page"> */}
      <div className="login-body-div">
        <p className="login-body-text">
         {bodyText}
        </p>

        <p className="login-app-name">Budget Stacks</p>
      </div>

      <div className="login-form-div">
        <p className="login-form-title">Login</p>
        <form action="">
          <input type="email" placeholder="Email" id="email"></input>
          <input type="password" placeholder="Password" id="password"></input>
          <button type="button" id="login-submit">Sign In</button>
          <a href="#">New User?</a>
          <a href="#">Forgot Password</a>
        </form>
      </div>
    {/* </div> */}
      

      {/* <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count} */}
     
    </>
  )
}

export default App
