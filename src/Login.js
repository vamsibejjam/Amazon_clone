import React, { useState } from 'react';
import './Login.css' // Import your custom CSS for specific styling (optional)
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      alert(error.code.slice(5));
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (userCredential) {
        navigate('/');
      }
    } catch (error) {
      alert(error.code.slice(5));
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center  p-3">
      <Link to="/">
        <img className="login_logo m-4" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon logo" />
      </Link>

      <div className="row justify-content-center ">
        <div className="col-9  rounded shadow border p-3 bg-light"> 
          <h1 className="text-center mb-3">Sign-in</h1>

          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">E-mail</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus required />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <button type="submit" onClick={signIn} className="btn login_button w-100">Login</button>
          </form>

          <p className="mt-3 text-center terms">
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
          </p>

          <button onClick={register} className="btn w-100 mt-2 login_registerButton">Create your Amazon account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
