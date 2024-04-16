import React, { useState } from 'react';
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import Sell from './components/Sell';
import Footer from './components/Footer';

const App = () => {
    // State to store the list of buy properties
    const [buyProperties, setBuyProperties] = useState([]);

    // Function to handle new property submissions from Sell component
    const handleNewProperty = (newProperty) => {
        // Update the list of buy properties with the new property
        setBuyProperties([...buyProperties, newProperty]);
    };

    return (
        <ChakraProvider>
            <Box padding="20px" maxWidth="1000px" mx="auto">
                {/* Heading */}
                <Heading as="h1" mb="20px" textAlign="center" color="teal.600" fontSize="2xl">
                    Property Listing
                </Heading>

                {/* Sell component */}
                <Sell onNewProperty={handleNewProperty} />

                {/* Footer component */}
                <Footer />
            </Box>
        </ChakraProvider>
    );
};

export default App;
