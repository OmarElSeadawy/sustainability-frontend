import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';
import { useContext } from 'react';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: rest.location } });
    }
  }, [isLoggedIn, navigate, rest.location]);

  return isLoggedIn ? <Component {...rest} /> : null;
};

export default AuthenticatedRoute;