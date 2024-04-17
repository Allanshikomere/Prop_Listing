import React,{useState} from "react";
import { SearchIcon} from "@chakra-ui/icons";
import {Button,Input,InputGroup,InputLeftElement, Card, CardBody, CardFooter,Stack,Heading,Divider,ButtonGroup, Text,Image,Grid,GridItem} from "@chakra-ui/react"
import InitialFocus from "./RequestModal";

function SearchBar({properties}) {
    const [search,setSearch] = useState('');
    const [filteredProperties, setFilteredProperties] = useState([]);



    const displayChange = (e) => {
        setSearch(e.target.value)
        const filtered = properties.filter((prop) => {
            return prop.property_type.toLowerCase().includes(search.toLowerCase()) 
        })
        setFilteredProperties(filtered)  
    }
    
    return (
        <div>
            <InputGroup marginTop={"1rem"} >
                <InputLeftElement pointerEvents="none">
                    <SearchIcon className="searchIcon" marginLeft={'12rem'} color='teal' _placeholder={{ color: 'inherit' }} />
                </InputLeftElement>
                <Input placeholder="Search by property type" onChange={displayChange} width={'90.8vw'} marginLeft={'5.7rem'} color='grey' _placeholder={{ color: 'inherit' }} focusBorderColor='teal.400'/>
            </InputGroup> 

            <Grid templateColumns={'repeat(3, minmax(100px , 1fr))'} gap={20} marginLeft={'6rem'} marginTop={'2rem'}>
            {filteredProperties.map((prop) => {
                return <GridItem key={prop.id}>
                    <Card maxW='sm'>
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
    );
}
export default SearchBar;