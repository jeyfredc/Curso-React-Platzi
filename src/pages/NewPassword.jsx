import React from 'react'
import '../styles/NewPassword.scss'

const NewPassword = () => {
  return (
    <div className="NewPassword">
    <div className="NewPassword-container">
      <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

      <h1 className="tittle">Create a new password</h1>
      <p className="subtitle">Enter a new password for your accounts</p>
      <form action="/" className="form">
        <label for="new-password" className="label">Password</label>
        <input
          type="password"
          id="new-password"
          className="input input-password"
          placeholder="*********"
        />
        <label for="new-password" className="label">Re-enter Password</label>
        <input
          type="password"
          id="new-password"
          className="input input-password"
          placeholder="*********"
        />
        <input
          type="submit"
          value="Confirm"
          className="primary-button login-button"
        />
      </form>
    </div>
  </div>
  )
}

export default NewPassword