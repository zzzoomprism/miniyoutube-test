import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import { C } from '../const';
import Icon from './Icon';

const Header = () => {
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery('(min-width:600px)');
  const routeList = Object.values(C.ROUTE).map(el => {
    if (!matches) {
      return (
        <ListItem button key={el.route} component={NavLink} to={el.route}>
          <ListItemIcon>
            <Icon name={el.icon} />
          </ListItemIcon>
          <ListItemText>{el.name}</ListItemText>
        </ListItem>
      );
    } else {
      return (
        <Button
          color="inherit"
          component={NavLink}
          to={el.route}
          key={el.route}
          startIcon={<Icon name={el.icon} />}
        >
          {el.name}
        </Button>
      );
    }
  });
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Box
            width="100%"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            {!matches && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
            {matches && (
              <Box flexGrow={1}>
                <Button color="inherit" size="large" component={NavLink} to="/">
                  Mini Youtube
                </Button>
              </Box>
            )}
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              {matches && routeList}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        style={{ width: '250px' }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {
          setOpen(true);
        }}
      >
        <List>{routeList}</List>
      </SwipeableDrawer>
    </>
  );
};

export default Header;
