import React, { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? 'Login Attempted!' : 'Signup Attempted!');
  };

  return (
    <div style={{minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 20px'}}>
      <div className="visual-card" style={{maxWidth: '450px', width: '100%', textAlign: 'left', padding: '40px', backgroundColor: 'var(--color-surface)'}}>
        <div style={{textAlign: 'center', marginBottom: '30px'}}>
          <h2 style={{color: 'white', marginTop: '10px'}}>{isLogin ? 'Welcome Back' : 'Create an Account'}</h2>
          <p style={{color: 'var(--color-text-light)', fontSize: '14px'}}>
            {isLogin ? 'Log in to manage your requests and donations.' : 'Sign up to be part of the BloodConnect family.'}
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group" style={{marginBottom: '20px'}}>
              <label>Full Name</label>
              <input type="text" required />
            </div>
          )}
          <div className="input-group" style={{marginBottom: '20px'}}>
            <label>Email Address</label>
            <input type="email" required />
          </div>
          <div className="input-group" style={{marginBottom: '30px'}}>
            <label>Password</label>
            <input type="password" required />
          </div>
          
          <button type="submit" className="btn-primary w-100" style={{padding: '14px'}}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <div style={{textAlign: 'center', marginTop: '25px'}}>
          <p style={{color: 'var(--color-text-light)', fontSize: '14px'}}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span 
              onClick={() => setIsLogin(!isLogin)} 
              style={{color: 'var(--color-primary)', cursor: 'pointer', fontWeight: 'bold'}}
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
