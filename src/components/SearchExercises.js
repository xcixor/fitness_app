import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';


const SearchExercises = () => {
  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyContent="center"
      p="20px"
    >
    <Typography
      variant="h4"
      fontWeight={700}
      sx={{
        fontSize: {lg: '44px', xs: '30px'}
      }}
      mb="50px"
      textAlign="center"
      >
      Awesome Exercises You <br/>Should Know
    </Typography>
    <Box
      position="relative"
      mb="72px"
    >
      <TextField
        sx={{
          input: {
            fontWeight: '700',
            border: 'none',
            borderRadius: '5px'
          },
          width: {
            lg: '800px',
            xs: '350px'
          },
          backgroundColor: "#fff",
          borderRadius: '10px'
        }}
        height="76px"
        value=""
        onChange={(e) => {}}
        placeholder="Search Exercises"
        type="text"
      />
      <Button className="search-btn"
        sx={{
          bgcolor: '#ff2625',
          color: '#fff',
          textTransform: 'none',
          width: {lg: '175px', xs: '80px'},
          fontSize: {lg: '16px', xs: '12px'},
          height: "56px",
          position: "absolute",
          right: "0"
        }}
      >Search</Button>
    </Box>
    </Stack>
  )
}

export default SearchExercises;