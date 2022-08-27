import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Cart } from "./cart/Cart";
import { Checkout } from "./cart/Checkout";
import { Box, VStack, Flex, Image, Text, Button } from "@chakra-ui/react";
import Makeup from "./Components/Makeup";
import {Payment} from "./cart/Payment"
import LoginOtp from "./Components/LoginComponents/LoginOtp";
import LoginDetails from "./Components/LoginComponents/LoginDetails";
import {PaymentSuccess} from "./cart/PaymentSucces"

function App() {
  return (
    <Box backgroundColor="#f2f2f2" w="100%">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/Makeup' element={<Makeup />} />
        <Route path='/payment' element={<Payment />} />
        <Route path="/loginotp" element={<LoginOtp />} />
        <Route path="/register" element={<LoginDetails />} />
        <Route path="/success" element={<PaymentSuccess />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
