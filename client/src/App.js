import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom' 
import HomePage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import ProfilPage from './scenes/profilePage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import  {ThemeProvider} from '@mui/material'
import { createTheme } from '@mui/material/styles';
import {themeSettings} from "./theme";
import { create } from '@mui/material/styles/createTransitions';


function App() {

  const mode = useSelector((state)=>(state.mode));
  const theme = useMemo(()=>createTheme(themeSettings(mode)), [mode]);


  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme = {theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/profile/:userId' element={<ProfilPage />} />
      </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
