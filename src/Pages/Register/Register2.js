import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import toast from 'react-hot-toast';

import UserLogin from '../../Components/UserLogin/UserLogin.js';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male');
  const [school, setSchool] = useState('');
  const [height, setHeight] = useState('');
  const [mbti, setMbti] = useState('');
  const [description, setDescription] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <UserLogin>
        <div className='register-contents'>
          <div style={{ marginTop: '-2rem' }}>
            <h1>Register Youthting</h1>
            <form>
              <input
                type='text'
                placeholder='이름 입력'
                className='login-input'
                required
                value={password}
                onChange={(event) => setName(event.target.value)}
              />
              <br />
              <input
                type='text'
                placeholder='이메일 입력'
                className='login-input'
                required
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
              <label className='radio-buttons'>
                <input
                  type='radio'
                  className=''
                  value='male'
                  checked={gender === 'male'}
                  onChange={(event) => setGender(event.target.value)}
                />
                남성
                <input
                  type='radio'
                  className=''
                  value='female'
                  checked={gender === 'female'}
                  onChange={(event) => setGender(event.target.value)}
                  style={{ marginLeft: '5rem' }}
                />
                여성
              </label>
              <br />
              <input
                type='text'
                className='login-input'
                placeholder='학교명 입력'
                required
                value={school}
                onChange={(event) => setSchool(event.target.value)}
              />
              <br />
              <button disabled={loading} className='login-button'>
                {loading ? '가입 중 ...' : '가입하기 !'}
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
          <Link className='register-button' to='/login'>
            계정이 이미 있으신가요 ?
          </Link>
        </div>
      </UserLogin>
    </div>
  );
};

export default Register;
