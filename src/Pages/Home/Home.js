import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './Home.scss';
import { useAuth } from '../../Context/Auth';
import { useEffect, useState } from 'react';

const Home = () => {
  // context
  const [auth, setAuth] = useAuth();

  // state
  const [userInfo, setUserInfo] = useState({});

  // hooks
  const navigate = useNavigate();

  useEffect(() => {
    setUserInfo(auth);
  }, []);

  const handleLogout = () => {
    setAuth({
      name: null,
      password: null,
      height: null,
      mbti: null,
      univName: null,
      email: null,
      storeProfileName: null,
    });
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <div>
      <div className='home-banner'>
        <div className='banner-title'>
          <h1>대학교에서 친구 만들어보자, YouthTing.</h1>
          {userInfo.name === null ? (
            <h1
              className='start'
              onClick={() => {
                navigate('/login');
              }}
            >
              로그인 !
            </h1>
          ) : (
            <>
              <hr />
              <h1>{userInfo.name}님 환영합니다</h1>
              <hr />
              <button onClick={handleLogout}>로그아웃</button>
            </>
          )}
        </div>
        <div className='banner-image'></div>
      </div>
      <hr />
      <div>***Content currently empty</div>
    </div>
  );
};

export default Home;
