import React, { useState } from 'react';
import './LoginForm.css';
import img from '../../Assets/Image/img.png';
import img1 from '../../Assets/Image/img1.png';
import Emoji1 from '../../Assets/Image/Emoji1.png';
import Emoji2 from '../../Assets/Image/Emoji2.png';
import Emoji3 from '../../Assets/Image/Emoji3.png';
import Emoji4 from '../../Assets/Image/Emoji4.png';
import Emoji5 from '../../Assets/Image/Emoji5.png';
import Emoji6 from '../../Assets/Image/Emoji6.png';
import Emoji7 from '../../Assets/Image/Emoji7.png';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Email:', email);
    console.log('Password:', password);
    alert("Submited")
    setEmail('');
    setPassword('');
  };

  const getEmoji = () => {
    if (showPassword) return Emoji7;
    if (password.length > 0) return Emoji6;
    const length = email.length + password.length;
    if (length < 5) return Emoji1;
    if (length < 10) return Emoji2;
    if (length < 15) return Emoji3;
    if (length < 20) return Emoji4;
    if (length < 25) return Emoji5;
    return Emoji1; 
  };

  return (
    <div className="w-full max-w-xs m-auto mt-24">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-center mb-5 text-[#5D5FEF]">Login</h1>
        <div className="relative mb-10">
          <img src={img} alt="background" style={{ width: '500px' }} />
          <img src={img1} alt="overlay" className="absolute" style={{ left: '10px', top: '0px', width: '200px' }} />
          <img src={getEmoji()} alt="emoji" className="absolute" style={{ width: '150px', left: '40px', top: '24px' }} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
              id="email"
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={handleEmailChange}
            />
            <span className="absolute inset-y-0 right-0 pr-1 flex items-center pointer-events-none m-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-500"
              >
                <path
                  d="M2.3999 9.76947C2.3999 13.1773 2.3999 18.4957 2.3999 18.4957C2.3999 18.4957 2.3999 18.4957 2.3999 18.4957C2.3999 19.8212 3.47442 20.8957 4.7999 20.8957H19.1999C20.5254 20.8957 21.5999 19.8212 21.5999 18.4957V9.20619M2.3999 9.76947C2.3999 9.35572 2.61305 8.97116 2.9639 8.75187L11.9999 3.10437L20.9882 8.1603C21.3661 8.37284 21.5999 8.77266 21.5999 9.20619M2.3999 9.76947C2.8799 9.76947 11.9999 15.7044 11.9999 15.7044L21.5999 9.20619"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye m-0" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                  <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                </svg>
              )}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#A5A6F6] hover:bg-[#484AD7] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
