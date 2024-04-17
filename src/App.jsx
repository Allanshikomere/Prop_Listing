import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, Box, Heading, Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import SellCard from './components/SellCard';
import ForSale from './components/ForSale';
import BuyHomeCard from './components/BuyHomeCard';
import PropertyList from './components/PropertyList';
import Footer from './components/Footer';
import './styles.css';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import theme from './components/Theme';

function App() {
  const [buyProperties, setBuyProperties] = useState([]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/properties')
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  const handleNewProperty = (newProperty) => {
    setBuyProperties([...buyProperties, newProperty]);
  };

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Navbar />
        {/* <SearchBar /> */}
        <Box padding="20px">
          {/* <Heading as="h1" mb="20px" textAlign="center">
            Property Listing
          </Heading> */}
          <Routes>
            {/* Routes from the original App */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />

            {/* Routes from Cynthia's App */}
            <Route path="/ForSale" element={<ForSale onNewProperty={handleNewProperty} />} />
            <Route path="/sell" element={<SellCard />} />

            {/* Routes from Mariam's App */}
            <Route path="/buy" element={<BuyHomeCard />} />
            <Route path="/PropertyList" element={<PropertyList properties={properties} />} />
          </Routes>
          <Container maxW="container.lg" centerContent>
            <Services />
            <AboutUs />
        </Container>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
