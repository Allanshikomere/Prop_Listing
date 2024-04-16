import { useState , useEffect} from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import BuyHomeCard from './BuyHomeCard'
import PropertyList from './PropertyList';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => setProperties(data.products))
  },[])
  
  
  return (
      <>
      <ChakraProvider>
        <Router>

          <Routes>
            <Route path="/" element={<BuyHomeCard />}></Route>

            <Route path="/PropertyList" element={<PropertyList properties={properties}/>}></Route>
          </Routes>
        </Router>
      </ChakraProvider>
      </>
    
  )
}

export default App
