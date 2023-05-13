import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './Home.scss';
import { useAuth } from '../../Context/Auth';
import { useEffect } from 'react';

const Home = () => {
  // context
  const [auth, setAuth] = useAuth();

  // hooks
  const navigate = useNavigate();

  return (
    <div>
      <div className='home-banner'>
        <div className='banner-title'>
          <h1>대학교에서 친구 만들어보자, YouthTing.</h1>
          {auth === null ? (
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
              <h1>{auth}님 환영합니다</h1>
              <hr />
            </>
          )}
        </div>
        <div className='banner-image'></div>
      </div>
      <hr />
      <div>***Content currently empty</div>
      {/* <div style={{ marginTop: '2.5rem' }}>
        <h1 style={{ marginLeft: '5rem' }}>후기</h1>
        <div className='reviews'>
          {dummyData.map((user) => {
            return (
              <div key={user.id} className='review'>
                <div className='user-profile-image'></div>
                <div className='user-review-info'>
                  <h5>{user.name}</h5>
                  <p>{user.stars} / 5점</p>
                  <p>{user.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Home;
