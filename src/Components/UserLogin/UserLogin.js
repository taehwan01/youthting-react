import './UserLogin.scss';

const UserLogin = ({ children }) => {
  return (
    <div className='login'>
      <div className='login-box'>
        <div className='side-box'>
          <div
            className='white-box'
            style={{
              borderLeft: '0.1rem solid black',
              borderTop: '0.1rem solid black',
            }}
          ></div>
          <div
            style={{
              borderBottom: '0.1rem solid black',
              borderTop: '0.1rem solid black',
            }}
          ></div>
          <div
            className='white-box'
            style={{
              borderLeft: '0.1rem solid black',
              borderBottom: '0.1rem solid black',
            }}
          ></div>
        </div>
        <div className='side-box'>
          <div
            style={{
              borderLeft: '0.1rem solid black',
              borderRight: '0.1rem solid black',
            }}
          ></div>
          {children}
        </div>
        <div className='side-box'>
          <div
            className='white-box'
            style={{
              borderRight: '0.1rem solid black',
              borderTop: '0.1rem solid black',
            }}
          ></div>
          <div
            style={{
              borderBottom: '0.1rem solid black',
              borderTop: '0.1rem solid black',
            }}
          ></div>
          <div
            className='white-box'
            style={{
              borderRight: '0.1rem solid black',
              borderBottom: '0.1rem solid black',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
