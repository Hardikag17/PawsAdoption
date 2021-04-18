//jshint esversion:6
import React from 'react';
import '../styles/SignUp.css';
import logo from '../images/logo.png';

function SignUp() {
  return (
    <div>
      <main class=' form-signin '>
        <center>
          <form>
            <img
              class='mb-4'
              src={logo}
              alt='logo'
              styles={{ width: '7', height: '5' }}
            />
            <h1 class='h3 mb-3 fw-normal'>Sign Up</h1>
            <div class='form-floating'>
              <input
                type='email'
                class='form-control'
                id='floatingInput'
                placeholder='name@example.com'></input>
              <label for='floatingInput'>Email address</label>
            </div>
            <div class='form-floating'>
              <input
                type='text'
                class='form-control'
                id='floatingInput'
                placeholder='name{numbers}'></input>
              <label for='floatingInput'>Enter a Valid Username</label>
            </div>
            <div class='form-floating'>
              <input
                type='password'
                class='form-control'
                id='floatingPassword'
                placeholder='Password'></input>
              <label for='floatingPassword'>Password</label>
            </div>
            <div class='checkbox mb-3'>
              <label>
                <input type='checkbox' value='remember-me' /> I agree to all
                terms and conditions
              </label>
            </div>
            <button class='w-100 btn btn-lg btn-primary' type='submit'>
              Sign Up
            </button>
            <p class='mt-5 mb-3 text-muted'>&copy; 2021–2022</p>
          </form>
        </center>
      </main>
    </div>
  );
}

export default SignUp;
