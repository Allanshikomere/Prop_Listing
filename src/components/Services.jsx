import React from 'react';
import { Box, Flex, Heading, SimpleGrid, Text, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaHome, FaDollarSign, FaSearch } from 'react-icons/fa';

const Services = () => {
    const serviceCards = [
        {
            title: 'Buy Properties',
            icon: FaHome,
            description: 'Discover and purchase your dream home with ease.',
        },
        {
            title: 'Sell Properties',
            icon: FaDollarSign,
            description: 'List your property for sale and reach potential buyers.',
        },
        {
            title: 'Property Search',
            icon: FaSearch,
            description: 'Efficiently search for properties based on your preferences.',
        },
    ];

    const cardBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Box py={10} className='services'>
            <Heading as="h2" size="xl" textAlign="center" mb={8}>
                Our Services
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mx="auto" maxW="container.lg">
                {serviceCards.map((service, index) => (
                    <Box key={index} p={6} borderWidth="1px" borderRadius="lg" bg={cardBgColor}>
                        <Flex align="center" mb={4}>
                            <Icon as={service.icon} boxSize={6} mr={4} />
                            <Heading as="h3" size="md">
                                {service.title}
                            </Heading>
                        </Flex>
                        <Text>{service.description}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Services;
