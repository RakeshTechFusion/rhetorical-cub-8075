import Footer  from "./Components/Footer/Footer";
import {Navbar}  from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Cart } from "./Pages/cart/Cart";
import { Checkout } from "./Pages/cart/Checkout";
import { Box, VStack, Flex, Image, Text, Button } from "@chakra-ui/react";
import Makeup from "./Components/Makeup";
import MakeupDetails from './Components/MakeupDetails';
import {Payment} from "./Pages/cart/Payment"
import LoginOtp from "./Components/LoginComponents/LoginOtp";
import LoginDetails from "./Components/LoginComponents/LoginDetails";
import MakeupDetails from "./Components/MakeupDetails";
import {PaymentSuccess} from "./Pages/cart/PaymentSucces"

function App() {
  return (
    <Box backgroundColor="#f2f2f2" w="100%">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/makeup' element={<Makeup />} />
        <Route path='/makeup/:id' element={<MakeupDetails />}/>
        <Route path='/payment' element={<Payment />} />
        <Route path="/loginotp" element={<LoginOtp />} />
        <Route path="/register" element={<LoginDetails />} />
        <Route path='/makeup' element={<Makeup />} />
        <Route path='/makeup/:id' element={<MakeupDetails />}/>
        <Route path="/success" element={<PaymentSuccess />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
