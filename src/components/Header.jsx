/**
 * @file Header.jsx
 * @description Responsive header with navigation and mobile swipe drawer.
 */

import React, { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/logo.webp';
import { menuItems } from '../Menu';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  /**
   * Toggles the swipe drawer open/closed
   * @param {boolean} open - Whether the drawer should be open
   */
  const toggleDrawer = (open) => (event) => {
    if (
      event?.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  /**
   * Renders mobile menu list inside the swipeable drawer
   */
  const renderDrawerList = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width: 250 }}
    >
      <img
        src={Logo}
        alt="Royal Delights Logo"
        width={200}
        className="p-3"
        loading="lazy"
      />
      <Divider />
      <List>
        {menuItems.map((menu) => (
          <ListItem
            button
            component="a"
            href={menu.path}
            key={menu.label}
            sx={{ py: 1 }}
          >
            <ListItemIcon>
              <KeyboardReturnIcon className="fa-flip-horizontal" />
            </ListItemIcon>
            <ListItemText primary={menu.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header id="header">
      <Container>
        {/* Mobile Navigation Drawer */}
        <SwipeableDrawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {renderDrawerList()}
        </SwipeableDrawer>

        {/* Logo */}
        <Link to="/" aria-label="Go to homepage">
          <img
            src={Logo}
            alt="Royal Delights Logo"
            width={200}
            className="logo"
            loading="lazy"
          />
        </Link>

        {/* Mobile Menu Button */}
        <Button
          onClick={toggleDrawer(true)}
          className="d-block d-md-none menuicon"
          aria-label="Open menu"
        >
          <MenuIcon />
        </Button>

        {/* Desktop Navigation */}
        <nav id="navbar" className="navbar d-none d-md-block" role="navigation">
          <ul>
            {menuItems.map((menu) => (
              <li key={menu.label}>
                <a href={menu.path}>{menu.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;