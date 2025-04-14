import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getTokenFromCookie } from 'utils/utils';

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const getToken = getTokenFromCookie();

  useEffect(() => {
    if (!getToken) {
      navigate('login', {
        state: {
          from: location.pathname
        },
        replace: true
      });
      navigate('login', { replace: true });
    } 
  }, [getToken]);

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

export default AuthGuard;
