import React from 'react';
import { Box, Flex, Heading, Text, Image, Button } from '@chakra-ui/react';
// import aboutImage from '../assets/about_image.jpg';

const AboutUs = () => {
    return (
        <Box p={8}>
            <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
                <Box flex="1" mr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
                    <Heading as="h2" size="xl" mb={4}>
                        Welcome to PropList!
                    </Heading>
                    <Text fontSize="lg" mb={4}>
                        We are your premier destination for all things related to real estate.
                        Whether you're buying, selling, or looking for information, we've got you covered.
                    </Text>
                    <Button colorScheme="teal" size="md">
                        Learn More
                    </Button>
                </Box>
                <Box flex="1">
                    {/* <Image src={aboutImage} alt="About Us" borderRadius="md" /> */}
                </Box>
            </Flex>
        </Box>
    );
};

export default AboutUs;
