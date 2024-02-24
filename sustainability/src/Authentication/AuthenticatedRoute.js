import React from 'react';
import { useNavigate } from 'react-router-dom';

const checkIfUserIsLoggedIn = () => {
  const token = localStorage.getItem('authToken');
  return token !== null;
};

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const isLoggedIn = checkIfUserIsLoggedIn(); // Replace this with your actual authentication check

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: rest.location } });
    }
  }, [isLoggedIn, navigate, rest.location]);

  return isLoggedIn ? <Component {...rest} /> : null;
};

export default AuthenticatedRoute;