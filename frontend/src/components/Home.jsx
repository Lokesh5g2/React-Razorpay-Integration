import React from 'react'
import { Box,Stack } from '@chakra-ui/react';
import Card from './Card';
import axios from 'axios';

document.title = "Home";

const checkoutHandler = async( amount) => {
  const {data:{key}} = await axios.get("http://localhost:4000/api/getkey")
  console.log(key)

  const {data:{order} } = await axios.post("http://localhost:4000/api/checkout",{
    amount
  })

  const options = {
    key: key, // Enter the Key ID generated from the Dashboard
    amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Lokesh",
    description: "Test Transaction",
    image: "https://avatars.githubusercontent.com/u/119833495?v=4",
    order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: "http://localhost:4000/api/paymentVerification",
    prefill: {
      name: "",
      email: "",
      contact: "",
    },
    notes: {
      address: "  ",
    },
    theme: {
      color: "#292929",
    },
  };

  const razor = new window.Razorpay(options);

  razor.open();

}
const Home = () => {
  return (
    <Box>
      <Stack direction={["column","row"]} h="100vh" justifyContent="center" alignItems="center">
        <Card amount={5000} img="https://www.nobleui.com/html/template/assets/images/faces/face1.jpg"  checkoutHandler={checkoutHandler} />
        <Card amount={3000} img="https://www.nobleui.com/html/template/assets/images/faces/face1.jpg" checkoutHandler={checkoutHandler} />
      </Stack>
    </Box>
  );
};

export default Home
