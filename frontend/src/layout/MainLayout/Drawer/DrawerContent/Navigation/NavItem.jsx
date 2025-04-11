import PropTypes from 'prop-types';
import React, { forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';

// project import
import Dot from '../../../../../components/Dot';
import { activeItem } from '../../../../../store/reducers/menuReducer';
import useConfig from '../../../../../hooks/useConfig';
import { LAYOUT_CONST } from '../../../../../config';

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

const NavItem = ({ item, level, handleDrawerToggle }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { menuOrientation } = useConfig();
  const { drawerOpen, openItem } = useSelector((state) => state.menuReducer);

  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps = {
    component: forwardRef((props, ref) => <Link {...props} to={item.url} target={itemTarget} ref={ref} />)
  };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const Icon = item.icon;
  const itemIcon = item.icon ? <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} /> : false;

  const isSelected = openItem.findIndex((id) => id === item.id) > -1;

  const { pathname } = document.location;

  // active menu item on page load
  useEffect(() => {
    if (pathname && pathname.includes('product-details')) {
      if (item.url && item.url.includes('product-details')) {
        dispatch(activeItem({ openItem: [item.id] }));
      }
    }

    if (pathname && pathname.includes('kanban')) {
      if (item.url && item.url.includes('kanban')) {
        dispatch(activeItem({ openItem: [item.id] }));
      }
    }

    if (pathname.includes(item.url)) {
      dispatch(activeItem({ openItem: [item.id] }));
    }
    // eslint-disable-next-line
  }, [pathname]);

  const textColor = theme.palette.mode === 'dark' ? 'grey.400' : 'white';
  const iconSelectedColor = 'white';
  const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {menuOrientation === LAYOUT_CONST.VERTICAL_LAYOUT || downLG ? (
        <ListItemButton
          {...listItemProps}
          disabled={item.disabled}
          selected={isSelected}
          sx={{
            pl: isDownSm ? 5 : 6.5,
            ...(drawerOpen && {
              '&:hover': {
                bgcolor: theme.palette.mode === 'dark' ? 'divider' : 'primary.lighter'
              },
              '&.Mui-selected': {
                bgcolor: theme.palette.mode === 'dark' ? 'divider' : 'primary.lighter',
                borderRight: `2px solid ${theme.palette.primary.main}`,
                fontWeight: 500,
                color: iconSelectedColor,
                '&:hover': {
                  color: iconSelectedColor,
                  bgcolor: theme.palette.mode === 'dark' ? 'divider' : 'primary.lighter'
                }
              }
            }),
            ...(!drawerOpen && {
              '&:hover': {
                bgcolor: 'transparent'
              },
              '&.Mui-selected': {
                '&:hover': {
                  bgcolor: 'transparent'
                },
                bgcolor: 'transparent'
              }
            }),
            display: 'flex',
            alignItems: 'center'
          }}
          onClick={() => handleDrawerToggle(item.id)}
        >
          {itemIcon && (
            <ListItemIcon
              sx={{
                minWidth: 28,
                color: isSelected ? iconSelectedColor : textColor,
                ...(!drawerOpen && {
                  borderRadius: 1.5,
                  width: 36,
                  height: 36,
                  alignItems: 'center',
                  justifyContent: 'center'
                }),
                ...(!drawerOpen &&
                  isSelected && {
                    bgcolor: theme.palette.mode === 'dark' ? 'primary.900' : 'primary.lighter'
                  })
              }}
            >
              {React.cloneElement(itemIcon, { stroke: isSelected ? 2.25 : 1.5, color: 'white' })}
            </ListItemIcon>
          )}
          <ListItemText
            primary={
              <Typography
                variant="h5"
                sx={{
                  color: isSelected ? iconSelectedColor : textColor,
                  fontWeight: isSelected ? 600 : 400,
                  pl: 1,
                  fontSize: { xs: '14px', sm: '18px' }
                }}
              >
                {item.id}
              </Typography>
            }
          />
          {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
            <Chip
              color={item.chip.color}
              variant={item.chip.variant}
              size={item.chip.size}
              label={item.chip.label}
              avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
            />
          )}
        </ListItemButton>
      ) : (
        <ListItemButton
          {...listItemProps}
          disabled={item.disabled}
          selected={isSelected}
          sx={{
            zIndex: 1201,
            ...(drawerOpen && {
              '&:hover': {
                bgcolor: 'transparent'
              },
              '&.Mui-selected': {
                bgcolor: 'transparent',
                color: iconSelectedColor,
                '&:hover': {
                  color: iconSelectedColor,
                  bgcolor: 'transparent'
                }
              }
            }),
            ...(!drawerOpen && {
              '&:hover': {
                bgcolor: 'transparent'
              },
              '&.Mui-selected': {
                '&:hover': {
                  bgcolor: 'transparent'
                },
                bgcolor: 'transparent'
              }
            })
          }}
        >
          {itemIcon && (
            <ListItemIcon
              sx={{
                minWidth: 36,
                ...(!drawerOpen && {
                  borderRadius: 1.5,
                  width: 36,
                  height: 36,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  '&:hover': {
                    bgcolor: 'transparent'
                  }
                }),
                ...(!drawerOpen &&
                  isSelected && {
                    bgcolor: 'transparent',
                    '&:hover': {
                      bgcolor: 'transparent'
                    }
                  })
              }}
            >
              {itemIcon}
            </ListItemIcon>
          )}

          {!itemIcon && (
            <ListItemIcon
              sx={{
                color: isSelected ? 'primary.main' : 'secondary.main',
                ...(!drawerOpen && {
                  borderRadius: 1.5,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  '&:hover': {
                    bgcolor: 'transparent'
                  }
                }),
                ...(!drawerOpen &&
                  isSelected && {
                    bgcolor: 'transparent',
                    '&:hover': {
                      bgcolor: 'transparent'
                    }
                  })
              }}
            >
              <Dot size={4} color={isSelected ? 'primary' : 'secondary'} />
            </ListItemIcon>
          )}
          <ListItemText
            primary={
              <Typography variant="h6" color="inherit">
                {item.title}
              </Typography>
            }
          />
          {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
            <Chip
              color={item.chip.color}
              variant={item.chip.variant}
              size={item.chip.size}
              label={item.chip.label}
              avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
            />
          )}
        </ListItemButton>
      )}
    </>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
  handleDrawerToggle: PropTypes.func
};

export default NavItem;
