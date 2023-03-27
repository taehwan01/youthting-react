import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './Home.scss';

const dummyData = [
  {
    id: 1,
    name: '익명1',
    stars: 4,
    description:
      '이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. ',
  },
  {
    id: 2,
    name: '익명2',
    stars: 5,
    description:
      '이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. ',
  },
  {
    id: 3,
    name: '익명3',
    stars: 4,
    description:
      '이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. ',
  },
  {
    id: 4,
    name: '익명4',
    stars: 1,
    description:
      '이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. ',
  },
  {
    id: 5,
    name: '익명5',
    stars: 3,
    description:
      '이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. 이번 학기에는 같이 밥 먹을 친구가 생겨서 너무 좋아여. ',
  },
];

const Home = () => {
  return (
    <div>
      <div className='home-page'>
        <div className='home-message-div'>
          <div></div>
          <div className='home-message'>
            <h1>대학교에서 친구 만들어보자, YouthTing.</h1>
          </div>
          <div className='home-message'>
            <h1>처음이신가요?</h1>
          </div>
          <div></div>
        </div>
        <div className='arrow'>
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '3rem' }} />
        </div>
        <div className='register'>
          <div></div>
          <div className='form'>
            <h1>새로 시작하기</h1>
            <form
              onSubmit={() => {
                console.log('registered');
              }}
            >
              <input type='text' placeholder='이름' />
              <br />
              <input type='text' placeholder='이메일' />
              <br />
              <input type='password' placeholder='비밀번호' />
              <br />
              <input type='password' placeholder='비밀번호 확인' />
              <br />
            </form>
            <button>가입하기 !</button>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <h1 style={{ marginLeft: '5rem' }}>후기</h1>
        <div className='reviews'>
          {dummyData.map((user) => {
            return (
              <div className='review'>
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
      </div>
    </div>
  );
};

export default Home;
