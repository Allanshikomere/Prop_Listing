import React from 'react';
import { Card, CardBody, CardFooter, Stack, Divider, ButtonGroup, Button, Text, Image, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../App.css';  // Make sure to import App.css
// import ForSale from './components/ForSale';

const SellCard = ({ children }) => {
    return (
        <div className="sell-card-container"> {/* Wrap the card in a div with the sell-card-container class */}
            <Card maxW='sm' borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg">
                <CardBody>
                    <Image
                        src='/src/assets/istockphoto-1402725784-640x640.jpg'  // Adjust the image URL as needed.
                        alt='Real estate listing'
                        borderRadius='lg'
                        className="animated-image"  // Apply the animation class here
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' textAlign="center">Sell Your Property</Heading>
                        <Text textAlign="center">
                            Ready to sell your property? List it now and find the perfect buyer quickly and easily!
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2' justifyContent="center" width="100%">
                        {/* Use the Link component to navigate to the /sell route */}
                        <Link to="/ForSale">
                            <Button variant='solid' colorScheme='teal'>
                                Sell Now
                            </Button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SellCard;