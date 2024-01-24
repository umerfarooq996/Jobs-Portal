import React from 'react';
import { Container, Box, Typography, IconButton, InputBase, Stack } from '@mui/material';

const SearchComponent = ({ iconName, placeholder, additionalText,value,setter }) => {
  const IconComponent = iconName;
  const handleChange = (event) => {
    setter(event.target.value);
  };
  return (
    <Container sx={{ display: 'flex', flexDirection: 'row', border: '1px solid black', alignItems: 'center', justifyContent: 'space-between', margin: '10px 5px', borderRadius: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1, alignItems: 'center' }}>
        <Typography style={{ fontWeight: 'bold', marginRight: '10px' }}>{additionalText}</Typography>
        <InputBase placeholder={placeholder} sx={{ flexGrow: 1 }} value={value} onChange={handleChange}/>
      </Box>
      <IconButton>
        <IconComponent />
      </IconButton>
    </Container>
  );
};
export default SearchComponent;
