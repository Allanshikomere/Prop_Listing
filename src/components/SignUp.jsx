import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Alert,
  AlertIcon,
  Progress,
  Heading,
} from '@chakra-ui/react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to manage success message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'password') {
      const strengthPercentage = (value.length / 10) * 100;
      setPasswordStrength(strengthPercentage);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    setPasswordMatchError(false);

    // Mock API call or any other submission handling
    // Here you can perform actual submission logic
    console.log('Form submitted:', formData);

    // Reset form fields and show success message
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setPasswordStrength(0);
    setShowSuccessMessage(true); // Show success message
  };

  return (
    <Box maxW="md" mx="auto" p={4}>
      <Heading as="h2" size="lg" color="blue.500" textAlign="center" marginTop="4">
        Sign Up
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              variant="filled"
              bg="gray.100"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              variant="filled"
              bg="gray.100"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              variant="filled"
              bg="gray.100"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              variant="filled"
              bg="gray.100"
            />
            <Text fontSize="sm" color="gray.500" mt={1}>
              Password Strength
            </Text>
            <Progress
              value={passwordStrength}
              size="sm"
              color={
                passwordStrength < 50
                  ? 'red'
                  : passwordStrength < 80
                  ? 'yellow'
                  : 'green'
              }
              bg="gray.200"
              borderRadius="md"
              mb={2}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              variant="filled"
              bg="gray.100"
            />
          </FormControl>

          {passwordMatchError && (
            <Alert status="error">
              <AlertIcon />
              Passwords do not match. Please try again.
            </Alert>
          )}

          <Button type="submit" colorScheme="blue" variant="solid">
            Sign Up
          </Button>

         
          {showSuccessMessage && (
            <Alert status="success">
              <AlertIcon />
              Welcome! Thank you for signing up.
            </Alert>
          )}
        </Stack>
      </form>
    </Box>
  );
};

export default SignUp;
