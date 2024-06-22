import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calender';
import Kanban from './pages/Kanban';
import Header from './componenets/Header';
import Sidebar from './componenets/Sidebar';

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/kanban' element={<Kanban />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
