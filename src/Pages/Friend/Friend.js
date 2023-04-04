import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../../Shared/Sidbar';

const dummyData = [
  { id: 1, username: 'youTi', message: '안녕 나는 유스팅이야, 나랑 친구해줘.' },
  { id: 2, username: 'youTi', message: '안녕 나는 유스팅이야, 나랑 친구해줘.' },
  { id: 3, username: 'youTi', message: '안녕 나는 유스팅이야, 나랑 친구해줘.' },
  { id: 4, username: 'youTi', message: '안녕 나는 유스팅이야, 나랑 친구해줘.' },
  { id: 5, username: 'youTi', message: '안녕 나는 유스팅이야, 나랑 친구해줘.' },
];

const Friend = () => {
  return (
    <div>
      <h1>친구 목록</h1>
      <Sidebar />
    </div>
  );
};

export default Friend;
