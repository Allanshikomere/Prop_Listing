import { Flex, chakra } from "@chakra-ui/react";
import React from "react";
import { Card,CardBody, CardFooter,Stack, Divider , ButtonGroup, Button ,Text , Image, Heading} from '@chakra-ui/react'
import {Link} from "react-router-dom"

function BuyHomeCard(){
    return(
        <div>
            <Card maxW='sm' marginLeft={'12rem'} marginTop={'5rem'}>
                <CardBody>
                    <Image
                    src='https://img.freepik.com/free-vector/real-estate-searching-concept_23-2148657458.jpg?t=st=1713188242~exp=1713191842~hmac=31a3f5fadd4783b6e146795014ecbe6549a02a665de21d9e11f4174b88a04074&w=1380'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Browse homes</Heading>
                    <Text>
                    Embark on your quest for the perfect home right here. Seamlessly browse and effortlessly apply—all in one convenient spot.
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Flex as={Link} to="/PropertyList">
                    <Button variant='solid' colorScheme='blue'>
                        Browse homes
                    </Button>
                    </Flex>
                    </ButtonGroup>
                </CardFooter>
                </Card>
        </div>
    )
}

export default BuyHomeCard