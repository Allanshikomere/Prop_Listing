import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Box, Button, FormControl, FormLabel, Input, Text, Textarea, Select } from '@chakra-ui/react';

const ForSale = ({ onNewProperty }) => {
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: '',
            type: '',
            location: '', // Add location to the initial values
            image: null,
        },
        onSubmit: async (values) => {
            try {
                const formData = new FormData();
                formData.append('title', values.title);
                formData.append('description', values.description);
                formData.append('price', values.price);
                formData.append('property_type', values.type);
                formData.append('location', values.location); // Include location in form data
                formData.append('image', values.image);

                const response = await axios.post('http://localhost:5555/properties', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                onNewProperty(response.data);
                alert('Property submitted successfully!');
                formik.resetForm();
            } catch (error) {
                setError(error.message);
            }
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
            if (!values.location) { // Validate location field
                errors.location = 'Location is required';
            }
            if (!values.image) {
                errors.image = 'Image is required';
            }
            return errors;
        },
    });

    return (
        <Box
            width="100%"
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                width="100%"
                maxWidth="600px"
                mx="auto"
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

                    <FormControl id="location" mb="10px"> {/* Location form control */}
                        <FormLabel>Location</FormLabel>
                        <Input
                            type="text"
                            name="location"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={formik.touched.location && formik.errors.location}
                        />
                        {formik.touched.location && formik.errors.location && (
                            <Text color="red">{formik.errors.location}</Text>
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
