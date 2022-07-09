import React from 'react';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
    <div className="CreateAccount-container">
      <h1 className="tittle">My account</h1>
      <form action="/" className="form">
        <div>
          <label for="name" className="label">Name</label>
          <input type="text" id='name'  placeholder='Jeyfred Calderon Cortes' className='input input-name'/>
          <label for="email" className="label">Email address</label>
          <input type="text" id='email'  placeholder='jeyfredc@gmail.com' className='input input-email'/>
          <label for="new-password" className="label">Password</label>
          <input type="password" id='password'  placeholder='**********' className='input input-password'/>
        </div>

        <input
          type="submit"
          value="Create"
          className="primary-button login-button"
        />
      </form>
    </div>
  </div>
  )
}

export default CreateAccount