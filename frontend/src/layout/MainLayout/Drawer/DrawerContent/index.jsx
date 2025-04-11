import { Divider } from '@mui/material';
import PropTypes from 'prop-types';
import Navigation from './Navigation';

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = ({ handleDrawerToggle }) => {
  return (
    <>
      <Navigation handleDrawerToggle={handleDrawerToggle} />
      <Divider sx={{ mt: 3 }} />
    </>
  );
};

export default DrawerContent;

DrawerContent.propTypes = {
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func
};
