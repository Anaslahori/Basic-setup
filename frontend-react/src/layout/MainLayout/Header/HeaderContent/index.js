// material-ui
import { Box, useMediaQuery } from '@mui/material';

// project import

import DrawerHeader from 'layout/MainLayout/Drawer/DrawerHeader';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));


  return (
    <>
      {!downLG && <DrawerHeader open={true} />}
      {downLG && <Box sx={{ width: '100%', ml: 1 }} />}
      {/* {!downLG && <Profile />} */}
    </>
  );
};

export default HeaderContent;
