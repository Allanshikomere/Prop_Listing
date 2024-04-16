import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Navbar from './Navbar';
import SearchBar from './components/SearchBar';
import './styles.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './Theme'; // Import your custom Chakra UI theme

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Navbar />
        <SearchBar/>
        <Routes>
          {/* Define default route for the root URL */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
