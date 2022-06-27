import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: {sm: '122px', xs:'40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none' }}
      px="20px"
      >
      <Link to="/">
        <img src={Logo} className="logo"/>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" className="link" id="homeLink">Home</Link>
        <a href="#exercises" className="link" id="exercisesLink">Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar;