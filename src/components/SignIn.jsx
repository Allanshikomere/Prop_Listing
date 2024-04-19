import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text
} from '@chakra-ui/react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch('http://127.0.0.1:5555/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        
        if (response.ok) {
            const data = await response.json();
            // Store the token in localStorage or sessionStorage
            localStorage.setItem('authToken', data.token);
            
            // Update authentication state
            setIsAuthenticated(true);
            
            // Navigate to the appropriate page or update the UI
            // e.g., navigate('/dashboard');
        } else {
            console.error('Login failed');
            // Provide feedback to the user, e.g., show an error message
        }
    } catch (error) {
        console.error('An error occurred during login:', error);
        // Provide feedback to the user
    }
};

  const handleSignUp = () => {
    
    console.log('Navigate to Sign Up');
  };

  return (
    <Box maxW="md" mx="auto" p={4}>
      <Heading as="h2" size="lg" color="blue.500" textAlign="center" marginTop="4">
        Sign In
      </Heading>
      <form onSubmit={handleSignIn}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel
              htmlFor="email"
              color="gray.600"
              fontSize="sm"
              fontWeight="bold"
              textAlign="left"
              marginBottom="2"
            >
              Email
            </FormLabel>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel
              htmlFor="password"
              color="gray.600"
              fontSize="sm"
              fontWeight="bold"
              textAlign="left"
              marginBottom="2"
            >
              Password
            </FormLabel>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>

          <Button type="submit" colorScheme="blue">
            Sign In
          </Button>

          {/* Prompt to sign up */}
          <Text fontSize="sm" color="gray.600" textAlign="center" mt={2}>
            Don't have an account?{' '}
            <Button colorScheme="blue" variant="link" onClick={handleSignUp}>
              Sign Up
            </Button>
          </Text>
        </Stack>
      </form>

      {/* Styled Sign Up card
      <Box mt={8} p={4} borderWidth="1px" borderRadius="md" bg="gray.50">
        <Heading as="h2" size="md" color="blue.500" textAlign="center" marginBottom="4">
          Sign Up
        </Heading>
        <Text fontSize="sm" color="gray.600" textAlign="center" marginBottom="4">
          Create an account to get started
        </Text>
        <Button colorScheme="blue" onClick={handleSignUp} width="100%">
          Sign Up
        </Button>
      </Box> */}
    </Box>
  );
};

export default SignIn;
