import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

import { useAuth } from '../../Context/Auth.js';

import './Register.scss';

const Register = () => {
  // auth context
  const [auth, setAuth] = useAuth();

  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [univAddress, setUnivAddress] = useState('');
  const [univName, setUnivName] = useState('');
  const [height, setHeight] = useState('');
  const [MBTI, setMBTI] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/register`, {
        // email,
        // password,
      });
      if (data?.error) {
        toast.error(data.error);
      } else {
        console.log(data);
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
      <div className='register-contents'>
        <div className='register-form'>
          <h1>Register Youthting</h1>
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
            <input
              type='password'
              className='input-text'
              placeholder='비밀번호 확인'
              required
              value={password}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <br />
            <input
              type='text'
              className='input-text'
              placeholder='이름 입력'
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <div className='radio-buttons'>
              <input
                type='radio'
                className='input-radio'
                required
                value='Man'
                checked={gender === 'Man'}
                onChange={(event) => setGender(event.target.value)}
              />
              <label className='radio-label'>남성</label>
              <br />
              <input
                type='radio'
                className='input-radio'
                required
                value='Woman'
                style={{ marginLeft: '2rem' }}
                checked={gender === 'Woman'}
                onChange={(event) => setGender(event.target.value)}
              />
              <label className='radio-label'>여성</label>
            </div>
            <input
              type='text'
              className='input-text'
              placeholder='나이 입력'
              required
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
            <br />
            <input
              type='text'
              className='input-text'
              placeholder='키 입력'
              required
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
            <br />
            <input
              type='text'
              className='input-text'
              placeholder='MBTI 입력'
              required
              value={MBTI}
              onChange={(event) => setMBTI(event.target.value)}
            />
            <br />
            <input
              type='text'
              className='input-text'
              placeholder='자기소개 입력'
              required
              value={introduction}
              onChange={(event) => setIntroduction(event.target.value)}
            />
            <br />
            <button className='register-button' disabled={loading}>
              {loading ? '회원가입 중 ...' : '회원가입하기 !'}
            </button>
          </form>
        </div>
        <Link className='to-login' to='/login'>
          이미 계정이 있으신가요 ?
        </Link>
      </div>
    </>
  );
};

export default Register;
