import React from 'react';
import { Card, CardBody, CardFooter, Stack, Divider, ButtonGroup, Button, Text, Image, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../App.css';  // Make sure to import App.css

const SellCard = ({ children }) => {
    return (
        <div className="sell-card-container">
            <div className="center-content"> {/* Wrapper div for centering content */}
                <Card maxW='sm' borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg">
                    <CardBody>
                        <Image
                            src='https://static.vecteezy.com/system/resources/thumbnails/022/138/099/small/home-for-sale-real-estate-sign-in-front-of-house-generative-ai-photo.jpg'
                            alt='Real estate listing'
                            borderRadius='lg'
                            className="animated-image"
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
                            <Link to="/ForSale">
                                <Button variant='solid' colorScheme='teal'>
                                    Sell Now
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default SellCard;
