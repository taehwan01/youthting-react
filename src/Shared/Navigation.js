import { Link, NavLink } from 'react-router-dom';

import './Navigation.scss';

const Navigation = () => {
  return (
    <div className='navigation'>
      <Link className='logo-container main-title' to='/'>
        YouthTing
      </Link>
      <div className='nav-links-container'>
        <NavLink className='nav-link' to='/date-search'>
          소개보기
        </NavLink>
        <NavLink className='nav-link' to='/store-search'>
          매장찾기
        </NavLink>
        <NavLink className='nav-link' to='/login'>
          사용자
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
