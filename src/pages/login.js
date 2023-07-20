import React, { useState,useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Header from '../components/Header'
import { useRouter } from 'next/router';
import { useStateValue } from '@/Store/Store';
import { auth } from '@/firebase';


  
 
function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   const [{user}]=useStateValue()


    const signIn = (e) => {
        e.preventDefault();
    
        signInWithEmailAndPassword
          (auth,email, password)
          .then((auth) => {
            if (auth) {
              console.log(auth)
              router.push("/");
            }})
          .catch((err) => alert(err.message));
      };
    
      const register = async(e) => {
        e.preventDefault();
    
        
          createUserWithEmailAndPassword(auth,email, password)
          .then((auth) => {
            // Registered and logged in
            if (auth) {
              router.push("/");
            }
          })
          .catch((err) => alert(err.message));
      };

    return (
      <div>
          <Header/>
        <div className='login'>
          
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
    

            <div className='login__container'>
                <h1>Sign-in</h1>
                <h2>{user?.email}</h2>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
        </div>
    )
}

export default Login