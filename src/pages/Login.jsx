import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/authContext/AuthContext';
import { login } from '../context/authContext/apiCalls';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 200);
    }
  }, [user, navigate]);
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
      <form className='flex flex-col gap-5'>
        <label htmlFor='email' className='text-teal-700 text-2xl'>
          Login
        </label>
        <input
          type='email'
          className='text-base p-2 border border-gray-500'
          placeholder='email'
          id='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          className='text-base p-2 border border-gray-500'
          placeholder='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className='bg-teal-700 text-white p-1 cursor-pointer text-base'
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
