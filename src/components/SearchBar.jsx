// components/SearchBar.jsx

import React, { useState } from 'react';
import { InputGroup, InputLeftElement, Input, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <InputGroup justifyContent="center" maxW="400px" mx="auto" mt={4}>
      <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
      <Input
        type="text"
        placeholder="Search for properties..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        borderColor="teal.400" 
        _focus={{
          borderColor: 'teal.500', 
        }}
      />
      <Button colorScheme="blue" onClick={handleSearch} ml={2}>
        Search
      </Button>
    </InputGroup>
  );
};

// export default SearchBar;
export default SearchBar;
