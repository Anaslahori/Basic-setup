import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTokenFromCookie } from "utils/utils";

const GuestGuard = ({ children }) => {
  const getToken = getTokenFromCookie();
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken) {
      navigate("/login");
    } else if (getToken) {
      navigate("/sample-page");
    }
  }, [getToken]);

  return children;
};

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default GuestGuard;
