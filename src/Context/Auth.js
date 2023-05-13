import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

// Auth로 axios 관리 및 로그인 유지(로컬스토리지) 모두 하기
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    name: null,
    password: null,
    height: null,
    mbti: null,
    univName: null,
    email: null,
    storeProfileName: null,
  });

  useEffect(() => {
    let fromLocalStorage = localStorage.getItem('auth');
    if (fromLocalStorage) setAuth(JSON.parse(fromLocalStorage));
  }, []);

  // axios request 관리
  axios.defaults.baseURL = 'http://localhost:8080/';

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
