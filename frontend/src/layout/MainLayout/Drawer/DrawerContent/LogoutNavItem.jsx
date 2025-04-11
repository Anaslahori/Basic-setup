// import { useTheme } from '@mui/material/styles';
// import { IconButton, ListItemButton, Typography, useMediaQuery } from '@mui/material';
// import { IconLogout2 } from '@tabler/icons-react';
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useIntl } from 'react-intl';
// import useLocalStorage from 'hooks/useLocalStorage';
// import globalConstant from 'utils/constants/globalConstant';
// import messages from 'layout/messages';
// import useLogout from 'hooks/useLogout';

// const LogoutNavItem = () => {
//   const theme = useTheme();
//   const intl = useIntl();
//   const { drawerOpen } = useSelector((state) => state.menuReducer);
//   const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));
//   const iconSelectedColor = theme.palette.mode === 'dark' && drawerOpen ? 'text.primary' : 'primary.main';
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [jwtTokanValue, setJwtTokenValue] = useLocalStorage(globalConstant.JWT_TOKEN, '');

//   const handleLogout = useLogout();

//   return (
//     <ListItemButton
//       onClick={handleLogout}
//       sx={{
//         mt: 3,
//         display: 'flex',
//         justifyContent: 'space-evenly',
//         flexGrow: 0,
//         alignItems: 'center',
//         ...(drawerOpen && {
//           '&:hover': {
//             bgcolor: theme.palette.mode === 'dark' ? 'divider' : 'primary.lighter'
//           },
//           '&.Mui-selected': {
//             bgcolor: theme.palette.mode === 'dark' ? 'divider' : 'primary.lighter',
//             borderRight: `2px solid ${theme.palette.primary.main}`,
//             color: iconSelectedColor,
//             '&:hover': {
//               color: iconSelectedColor,
//               bgcolor: theme.palette.mode === 'dark' ? 'divider' : 'primary.lighter'
//             }
//           }
//         }),
//         ...(!drawerOpen && {
//           '&:hover': {
//             bgcolor: 'transparent'
//           },
//           '&.Mui-selected': {
//             '&:hover': {
//               bgcolor: 'transparent'
//             },
//             bgcolor: 'transparent'
//           }
//         })
//       }}
//     >
//       <Typography
//         variant="h5"
//         sx={{ color: 'white', fontWeight: 400, fontSize: { xs: '0.9rem', sm: '1.1rem', ':hover': { fontWeight: 500 } } }}
//       >
//         {intl.formatMessage(messages.logout)}
//       </Typography>
//       <IconButton>
//         <IconLogout2 color="white" stroke={isDownSm ? 1 : 1.5} />
//       </IconButton>
//     </ListItemButton>
//   );
// };

// export default LogoutNavItem;
