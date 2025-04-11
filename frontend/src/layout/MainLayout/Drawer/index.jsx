import PropTypes from 'prop-types';
import { useMemo } from 'react';

import { useTheme } from '@mui/material/styles';
import { Drawer, useMediaQuery } from '@mui/material';

import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';
import { MOBILE_DRAWER_WIDTH, DRAWER_WIDTH } from '../../../config';

const MainDrawer = ({ open, handleDrawerToggle, window }) => {
  const theme = useTheme();

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawerContent = useMemo(() => <DrawerContent handleDrawerToggle={handleDrawerToggle} />, [handleDrawerToggle]);
  const drawerHeader = useMemo(() => <DrawerHeader open={open} handleDrawerToggle={handleDrawerToggle} />, [open, handleDrawerToggle]);
  const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Drawer
      container={container}
      onClose={handleDrawerToggle}
      open={open}
      anchor="left"
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: isDownSm ? MOBILE_DRAWER_WIDTH : DRAWER_WIDTH,
          background: theme.palette.primary.main,
          boxShadow: 'inherit',
          overflowY: 'unset'
        }
      }}
    >
      {drawerHeader}
      {drawerContent}
    </Drawer>
  );
};

MainDrawer.propTypes = {
  open: PropTypes.bool,
  window: PropTypes.object,
  handleDrawerToggle: PropTypes.func
};

export default MainDrawer;
