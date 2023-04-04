import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/friend'>
            친구 목록
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/friend'>
            받은 요청
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
