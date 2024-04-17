import React from 'react';
import { Box, Flex, Heading, Button, IconButton, Spacer, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg="#29272D" color="white" py={6} px={10} w="100%" position="fixed" top="0" left="0" right="0">
            <Flex justify="space-between" align="center">
                {/* Logo and Title */}
                <Flex align="center">
                    <img
                        src="/propList.jpeg"
                        style={{
                            height: '70px',
                            width: '70px',
                            marginRight: '10px',
                            borderRadius: '50%',
                        }}
                    />
                    <Heading as="h1" size="lg" fontWeight="bold">
                        PropList
                    </Heading>
                </Flex>

                {/* Navigation Links and Buttons */}
                <Flex align="center">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button variant="ghost" color="white">
                            Home
                        </Button>
                    </Link>
                    <Link to="/signin" style={{ textDecoration: 'none' }}>
                        <Button variant="ghost" color="white" ml={4}>
                            Sign In
                        </Button>
                    </Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                        <Button variant="ghost" color="white" ml={4}>
                            Sign Up
                        </Button>
                    </Link>
                    <Link to="/buy" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="solid"
                            colorScheme="green"
                            color="white"
                            ml={4}
                            _hover={{ bg: 'green.600' }}
                        >
                            Buy
                        </Button>
                    </Link>
                    <Link to="/sell" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="solid"
                            colorScheme="red"
                            color="white"
                            ml={4}
                            _hover={{ bg: 'red.600' }}
                        >
                            Sell
                        </Button>
                    </Link>

                    {/* Spacer to add space between links and buttons */}
                    <Spacer />

                    {/* Dark Mode Toggle Button */}
                    <IconButton
                        aria-label="Toggle dark mode"
                        icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
                        variant="ghost"
                        color="white"
                        fontSize="20px"
                        onClick={toggleColorMode}
                        _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                    />

                    {/* Menu Button (for mobile view) */}
                    <IconButton
                        aria-label="Menu"
                        icon={<FiMenu />}
                        variant="ghost"
                        color="white"
                        fontSize="20px"
                        _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                        display={{ base: 'block', md: 'none' }}
                    />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;
