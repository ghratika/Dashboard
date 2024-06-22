import React from 'react';
import { AppBar, Toolbar, Typography, Switch } from '@mui/material';

const Header = ({ setDarkMode, darkMode }) => (
  <AppBar position='static'>
    <Toolbar>
      <Typography variant='h6' style={{ flexGrow: 1 }}>
        Admin Dashboard
      </Typography>
      <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
    </Toolbar>
  </AppBar>
);

export default Header;
