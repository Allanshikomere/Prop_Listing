import React, { useRef } from 'react';
import { useFormik } from 'formik';
import { Box, Button, FormControl, FormLabel, Input, Text, Textarea, Select } from '@chakra-ui/react';

const ForSale = ({ onNewProperty }) => {
    // Initial form values
    const initialValues = {
        title: '',
        description: '',
        price: '',
        type: '',
        image: null,
    };

    // Create a reference to the file input
    const fileInputRef = useRef(null);

    // Formik form handling and validation
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            // Simulate an API request to save the property data
            setTimeout(() => {
                // Create a new property object
                const newProperty = {
                    title: values.title,
                    description: values.description,
                    price: values.price,
                    type: values.type,
                    image: URL.createObjectURL(values.image), // Use URL.createObjectURL to display the image
                };

                // Call the parent function to update the buy properties list
                onNewProperty(newProperty);

                // Show success message
                alert('Property submitted successfully!');

                // Clear form values
                formik.resetForm();

                // Reset the file input
                fileInputRef.current.value = '';
            }, 1000);
        },
        validate: (values) => {
            const errors = {};
            if (!values.title) {
                errors.title = 'Title is required';
            }
            if (!values.description) {
                errors.description = 'Description is required';
            }
            if (!values.price) {
                errors.price = 'Price is required';
            }
            if (!values.type) {
                errors.type = 'Type is required';
            }
            return errors;
        },
    });

    return (
        <Box
            width="100%"
            height="100vh" // Set height to full page
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                width="100%"
                maxWidth="600px"
                mx="auto" // Auto margin to center the form horizontally
                p="20px"
                boxShadow="md"
                borderRadius="md"
            >
                <form onSubmit={formik.handleSubmit}>
                    <FormControl id="title" mb="10px">
                        <FormLabel>Title</FormLabel>
                        <Input
                            type="text"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={formik.touched.title && formik.errors.title}
                        />
                        {formik.touched.title && formik.errors.title && (
                            <Text color="red">{formik.errors.title}</Text>
                        )}
                    </FormControl>

                    <FormControl id="description" mb="10px">
                        <FormLabel>Description</FormLabel>
                        <Textarea
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={formik.touched.description && formik.errors.description}
                        />
                        {formik.touched.description && formik.errors.description && (
                            <Text color="red">{formik.errors.description}</Text>
                        )}
                    </FormControl>

                    <FormControl id="price" mb="10px">
                        <FormLabel>Price</FormLabel>
                        <Input
                            type="number"
                            name="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={formik.touched.price && formik.errors.price}
                        />
                        {formik.touched.price && formik.errors.price && (
                            <Text color="red">{formik.errors.price}</Text>
                        )}
                    </FormControl>

                    <FormControl id="type" mb="10px">
                        <FormLabel>Type</FormLabel>
                        <Select
                            name="type"
                            value={formik.values.type}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={formik.touched.type && formik.errors.type}
                        >
                            <option value="">Select type</option>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                            <option value="land">Land</option>
                            <option value="commercial">Commercial</option>
                        </Select>
                        {formik.touched.type && formik.errors.type && (
                            <Text color="red">{formik.errors.type}</Text>
                        )}
                    </FormControl>

                    <FormControl id="image" mb="10px">
                        <FormLabel>Image</FormLabel>
                        <Input
                            ref={fileInputRef}
                            type="file"
                            name="image"
                            onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
                            onBlur={formik.handleBlur}
                            isInvalid={formik.touched.image && formik.errors.image}
                        />
                        {formik.touched.image && formik.errors.image && (
                            <Text color="red">{formik.errors.image}</Text>
                        )}
                    </FormControl>

                    <Button type="submit" colorScheme="teal" mt="10px">
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default ForSale;