import React, { useState } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // Import the SearchBar component

const Home = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleExploreListings = () => {
    setShowSearchBar(true); // Show the SearchBar when Explore Listings is clicked
  };

  return (
    <Box
      p={8}
      maxWidth="900px"
      mx="auto"
      textAlign="center"
      boxShadow="lg"
      borderRadius="xl"
      color="gray.800"
      mt={8}
      style={{
        backgroundImage: `url('/public/house.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the box takes up the full viewport height
      }}
    >
      <Box
        bgGradient="linear(to-r, blue.400, teal.300)"
        borderRadius="xl"
        p={12}
        mb={8}
      >
        <Heading as="h1" size="2xl" mb={4} color="white">
          Welcome To PropList
        </Heading>
        <Text fontSize="xl" color="white" mb={6}>
          Your one-stop destination for real estate listings
        </Text>
        <Text fontSize="lg" color="white">
          Explore our listings and find your dream property!
        </Text>
      </Box>
      <Link to="/listings" style={{ textDecoration: 'none' }}>
        <Button
          colorScheme="blue"
          size="lg"
          fontWeight="bold"
          _hover={{ bg: 'blue.600' }}
          onClick={handleExploreListings} // Handle click event for Explore Listings
        >
          Explore Listings
        </Button>
      </Link>

      {/* Conditional rendering of SearchBar */}
      {showSearchBar && <SearchBar />}
    </Box>
  );
};

export default Home;
