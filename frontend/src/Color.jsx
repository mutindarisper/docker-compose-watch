import * as React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Create from './pages/Create';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function Home() {
    const [anime, setAnime] = useState([]);
  
    useEffect(() => {
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/anime`)
        .then((res) => {
          setAnime(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    return (
      <main className="container">
        <h1 className="heading">Explore</h1>
        <p className="sub_heading">List of anime to watch</p>
  
        <ul className="anim_list">
          {anime.length > 0 &&
            anime.map((anim) => (
              <li key={anim._id} className="anime_card">
                <div className="anime_info">
                  <h4>{anim.title}</h4>
                  <p>{anim.description}</p>
                </div>
  
                <div className="anime_link">
                  <Link to={anim.link} target="_blank" className="link">
                    Watch
                  </Link>
                </div>
              </li>
            ))}
        </ul>
  
        {anime.length === 0 && (
          <p className="no_result">Oops, No anime available</p>
        )}
      </main>
    );
  }

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
        <Home />

        <Create />
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="#3f3836">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}




export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}