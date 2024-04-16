import React from 'react'
import { Heading,Card, CardBody, Stack, Image, ButtonGroup, Button, Divider, CardFooter,Text,Grid, GridItem } from "@chakra-ui/react";
import InitialFocus from './RequestModal';
function PropertyList({properties}){

    return(
        <div>
            <Heading size='1.5xl' marginLeft={'35rem'} marginTop={'1rem'} marginBottom={'1rem'}>PROPERTY LISTINGS FOR PURCHASE</Heading>
            <Grid templateColumns={'repeat(3, minmax(100px , 1fr))'} gap={20} marginLeft={'6rem'}>
            {properties.map((prop) => {
                return <GridItem key={prop.id}>
                    <Card maxW='sm'>
                    <CardBody>
                        <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>Living room Sofa</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
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