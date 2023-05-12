import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

import './Register.scss';

const mbtiOptions = [
  'ENFJ',
  'ENFP',
  'ENTJ',
  'ENTP',
  'ESFJ',
  'ESFP',
  'ESTJ',
  'ESTP',
  'INFJ',
  'INFP',
  'INTJ',
  'INTP',
  'ISFJ',
  'ISTJ',
  'ISFP',
  'ISTP',
];

const Register = () => {
  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [univAddress, setUnivAddress] =
    useState('서울특별시 성북구 서경로 124');
  const [univName, setUnivName] = useState('서경대학교');
  const [height, setHeight] = useState('');
  const [MBTI, setMBTI] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const formdata = new FormData();
      formdata.append('proFilePicture', profileImage[0]);
      formdata.append(
        'userJoinDto',
        JSON.stringify({
          email,
          password,
          name,
          age,
          gender,
          univAddress,
          univName,
          height,
          MBTI,
          introduction,
        }),
      );
      console.log(formdata);

      const { data } = await axios.post(`/add`, formdata, config);
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
      <div className='register-container'>
        <h1 style={{ marginBottom: '1rem' }}>Register Youthting</h1>
        <div className='register-contents'>
          <div className='register-form' style={{ paddingLeft: '5rem' }}>
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
                value={confirmPassword}
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
                type='number'
                className='input-text'
                placeholder='나이 입력'
                required
                value={age}
                onChange={(event) => {
                  setAge(event.target.value);
                }}
              />
              <br />
              <input
                type='number'
                className='input-text'
                placeholder='키 입력'
                required
                value={height}
                onChange={(event) => setHeight(event.target.value)}
              />
              {/* <input
                type='text'
                className='input-text'
                placeholder='MBTI 입력'
                required
                value={MBTI}
                onChange={(event) => setMBTI(event.target.value)}
              /> */}
              <br />
              <select
                className='select-mbti'
                onChange={(event) => setMBTI(event.target.value)}
                value={MBTI}
              >
                <option className='option-mbti' value='none'>
                  MBTI를 골라주세요.
                </option>
                {mbtiOptions.map((mbti, index) => {
                  return (
                    <option className='option-mbti' value={mbti} key={index}>
                      {mbti}
                    </option>
                  );
                })}
              </select>
            </form>
          </div>
          <div className='register-form' style={{ paddingRight: '5rem' }}>
            <form onSubmit={handleSubmit}>
              <input
                type='file'
                style={{ marginBottom: '0.7rem' }}
                onChange={(event) => {
                  setProfileImage(event.target.files);
                }}
              />
              <br />
              <textarea
                className='input-textarea'
                cols='23'
                rows='9'
                placeholder='자기소개 입력'
                onChange={(event) => {
                  setIntroduction(event.target.value);
                }}
              ></textarea>
              {/* <input
                type='textarea'
                className='input-text'
                placeholder='자기소개 입력'
                required
                value={introduction}
                onChange={(event) => setIntroduction(event.target.value)}
              /> */}
              <br />
              <button className='register-button' disabled={loading}>
                {loading ? '회원가입 중 ...' : '회원가입하기 !'}
              </button>
            </form>
          </div>
        </div>
        <div className='to-login-div'>
          <Link className='to-login' to='/login'>
            이미 계정이 있으신가요 ?
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
