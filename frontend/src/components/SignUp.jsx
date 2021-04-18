//jshint esversion:6
import React from 'react';
import '../styles/SignUp.css';
import logo from '../images/logo.png';

function SignUp() {
  return (
    <div>
      <main className=' form-signin '>
        <center>
          <form>
            <img
              className='mb-4'
              src={logo}
              alt='logo'
              styles={{ width: '7', height: '5' }}
            />
            <h1 className='h3 mb-3 fw-normal'>Sign Up</h1>
            <div className='form-floating'>
              <input
                type='email'
                className='form-control'
                id='floatingInput'
                placeholder='name@example.com'></input>
              <label for='floatingInput'>Email address</label>
            </div>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='floatingInput'
                placeholder='name{numbers}'></input>
              <label for='floatingInput'>Full name</label>
            </div>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='floatingInput'
                placeholder='name{numbers}'></input>
              <label for='floatingInput'>Username</label>
            </div>
            <div className='form-floating'>
              <input
                type='password'
                className='form-control'
                id='floatingPassword'
                placeholder='Password'></input>
              <label for='floatingPassword'>Password</label>
            </div>
            <div className='checkbox mb-3'>
              <label>
                <input type='checkbox' value='remember-me' /> I agree to all
                terms and conditions
              </label>
            </div>
            <button className='w-100 btn btn-lg btn-primary' type='submit'>
              Sign Up
            </button>
            <p className='mt-5 mb-3 text-muted'>&copy; 2021–2022</p>
          </form>
        </center>
      </main>
    </div>
  );
}

export default SignUp;
