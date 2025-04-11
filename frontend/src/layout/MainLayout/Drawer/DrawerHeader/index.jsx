import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

// project import
import { IconArrowLeft } from '@tabler/icons-react';
import { Box } from '@mui/material';
import DrawerHeaderStyled from './DrawerHeaderStyled';
import useConfig from '../../../../hooks/useConfig';
import { LAYOUT_CONST } from '../../../../config';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));

  const { menuOrientation } = useConfig();
  const isHorizontal = menuOrientation === LAYOUT_CONST.HORIZONTAL_LAYOUT && !downLG;

  return (
    <DrawerHeaderStyled
      theme={theme}
      open={open}
      sx={{
        minHeight: isHorizontal ? 'unset' : '60px',
        width: isHorizontal ? { xs: '100%', lg: '424px' } : 'inherit',
        padding: theme.spacing(6, 2, 3, 3)
      }}
    >
      <img height={46} width={downSm ? 140 : 172} alt="innofuse-logo-white" src={""} />
      <Box sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <IconArrowLeft color="white" onClick={handleDrawerToggle} size={downSm ? 24 : 30} />
      </Box>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  handleDrawerToggle: PropTypes.func
};

export default DrawerHeader;
