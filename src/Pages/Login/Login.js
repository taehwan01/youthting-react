import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import toast from 'react-hot-toast';

import UserLogin from '../../Components/UserLogin/UserLogin.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <UserLogin>
        <div className='login-contents'>
          <div style={{ marginTop: '-2rem' }}>
            <h1>Login Muroom</h1>
            <form>
              <input
                type='text'
                placeholder='이메일 입력'
                className='login-input'
                required
                autoFocus
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <br />
              <input
                type='password'
                placeholder='비밀번호 입력'
                className='login-input'
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <br />
              <button disabled={loading} className='login-button'>
                {loading ? '로그인 중 ...' : '로그인하기 !'}
              </button>
            </form>
          </div>
        </div>
        <div
          style={{
            borderLeft: '0.1rem solid black',
            borderRight: '0.1rem solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link className='register-button' to='/register'>
            계정이 없으신가요 ?
          </Link>
        </div>
      </UserLogin>
    </div>
  );
};

export default Login;
