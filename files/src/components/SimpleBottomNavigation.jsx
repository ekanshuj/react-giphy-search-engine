import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("search");
    else if (value === 2) navigate("stickers");
  }, [value]);

  return (
    <Box sx={{
      width: "100%",
      position: "fixed",
      bottom: 0,
      zIndex: 999,
    }}>
      <BottomNavigation style={{ background: 'black', }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{ color: 'white', }} label="GIFs" />
        <BottomNavigationAction style={{ color: 'white', }} icon={<SearchIcon fontSize='large' />} />
        <BottomNavigationAction style={{ color: 'white', }} label="Stickers" />
      </BottomNavigation>
    </Box>
  );
}
