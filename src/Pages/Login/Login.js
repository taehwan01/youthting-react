import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

import { useAuth } from '../../Context/Auth.js';

import './Login.scss';

const Login = () => {
  const [auth, setAuth] = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/login`, {
        email,
        password,
      });
      if (data?.error) {
        toast.error(data.error);
      } else {
        setAuth(email);
        localStorage.setItem('auth', JSON.stringify(email));
        toast.success('로그인 성공!');
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <>
      <div className='login-contents'>
        <div className='login-form'>
          <h1>Login Youthting</h1>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              className='input-text'
              placeholder='이메일 입력'
              required
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <input
              type='password'
              className='input-text'
              placeholder='비밀번호 입력'
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <button className='login-button' disabled={loading}>
              {loading ? '로그인 중 ...' : '로그인하기 !'}
            </button>
          </form>
        </div>
        <Link className='to-register' to='/register'>
          계정이 없으신가요 ?
        </Link>
      </div>
    </>
  );
};

export default Login;
