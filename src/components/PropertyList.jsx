import React from 'react'
import { Box,Heading,Card, CardBody, Stack, Image, ButtonGroup, Button, Divider, CardFooter,Text,Grid, GridItem } from "@chakra-ui/react";
import InitialFocus from './RequestModal';
import SearchBar from './SearchBar';
import "./property.css"


function PropertyList({properties}){

    return(
        <div>
            <Box bg='teal' w='50%' p={1} color='white' marginTop={'6rem'} marginLeft={'21rem'} className='box-tittle'>
            <Heading size='1.5xl' marginTop={'1rem'} marginBottom={'1rem'} >PROPERTY LISTINGS FOR PURCHASE</Heading>
            </Box>

            <SearchBar properties={properties}/>

            <Grid templateColumns={'repeat(3, minmax(100px , 1fr))'} gap={40} marginLeft={'6rem'} className='prop-card'>
            {properties.map((prop) => {
                return <GridItem key={prop.id}>
                    <Card maxW='sm' className='all-cards'>
                    <CardBody>
                        <Image
                        src={prop.image_url}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        width='450px'
                        height='300px'
                        objectFit='cover'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>{prop.title}</Heading>
                        <Text>
                            {prop.description}
                        </Text>
                        <Text>
                            <span><strong>Location:</strong> </span>{prop.location}
                        </Text>
                        <Text>
                            <span><strong>Property Type:</strong></span>{prop.property_type}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            {prop.price}
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                        <InitialFocus />
                        </ButtonGroup>
                        
                    </CardFooter>
                    </Card>
                </GridItem>
            })}
            </Grid>
        </div>
    )
}

export default PropertyList