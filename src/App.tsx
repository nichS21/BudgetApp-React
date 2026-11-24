import { useState } from 'react'

import './css/App.css'
import './css/index.css'

const FormEnum = {
  Login: 1,
  Registration: 2,
  ForgotPass: 3
} as const;


export default function App(): React.ReactElement{
  const [formType, setFormType] = useState<number>(FormEnum.Login);

  const bodyText: string = 
  `Making Money 
    Work for 
    You Starts
    With a Budget`;

  function swapForm(type: number): void {
    setFormType(type);
  }

  return (
    <>
      <div className="login-body-div">
        <p className="login-body-text">
          {bodyText}
        </p>

        <p className="login-app-name">Budget Stacks</p>
      </div>

      <AppForm type={formType} handleClick={swapForm}/>   
    </>
  )
}


interface AppFormParams {
  /* Refers back to 'FormEnum' - which form to display */
  type: number

  /* Function for handling a click on the anchor tag*/
  handleClick: (n: number) => void
}

function AppForm({ type, handleClick }: AppFormParams) : React.ReactElement {

  let formTitle: string = "";
  let innerForm: React.ReactElement = 
  <>
  </>

  if(type == FormEnum.Registration) {
    formTitle = "Sign Up";
    innerForm = 
    <>
      <input type="email" placeholder="Email" id="email-signup"></input>
      <input type="password" placeholder="Password" id="password-signup"></input>
      <input type="password" placeholder="Confirm Password" id="confirm-signup"></input>
      <button type="button" id="submit">Register</button>
      <button className="link" type="button" onClick={() => handleClick(FormEnum.Login)}>Back to Login</button>
    </>
  }
  else if(type == FormEnum.ForgotPass) {
    formTitle = "Forgot Password";
    innerForm = 
    <>
      <input type="email" placeholder="Email" id="email-forgot"></input>
      <input type="password" placeholder="Recovery Code" id="recovery-code"></input>
      <input type="password" placeholder="New Password" id="new-password"></input>
      <input type="password" placeholder="Confirm Password" id="confirm-password"></input>
      <button type="button" id="submit">Change Password</button>
      <button className="link" type="button" onClick={() => handleClick(FormEnum.Login)}>Back to Login</button>
    </>
  }
  else {
    formTitle = "Login";
    innerForm = 
    <>
      <input type="email" placeholder="Email" id="email-login"></input>
      <input type="password" placeholder="Password" id="password-login"></input>
      <button type="button" id="submit">Sign In</button>
      <button className="link" type="button" onClick={() => handleClick(FormEnum.Registration)}>New User?</button>
      <button className="link" type="button" onClick={() => handleClick(FormEnum.ForgotPass)}>Forgot Password</button>
    </>
  }


  return (
    <>
      <div className="login-form-div">
        <p className="login-form-title">{formTitle}</p>
        <form action="">
          {innerForm}
        </form>
      </div>
    </>
  )
}