import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext/AuthContext';
import { login } from '../context/authContext/apiCalls';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    login({ email, password }, dispatch);
    navigate('/');
  };
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
      <form className='flex flex-col gap-5'>
        <label htmlFor='email' className='bg-teal-500 text-2xl'>
          Login
        </label>
        <input
          type='email'
          className='text-base p-[15px]'
          placeholder='email'
          id='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          className='text-base p-[15px]'
          placeholder='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className='bg-teal-500 text-white p-1 cursor-pointer text-base'
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
