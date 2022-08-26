// import './App.css';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import {Cart} from "./cart/Cart"
import {Checkout} from "./cart/Checkout"
import { Box, VStack, Flex , Image,Text ,Button   } from "@chakra-ui/react";


function App() {
  return (
    <Box backgroundColor="#f2f2f2" w="100%">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
