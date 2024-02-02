import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  { LoginPage } from "../page/LoginPage";
import OtpMethod from "../page/OtpMethod";
import OtpPage from "../page/OtpPage";
import HomePage from "../page/HomePage";
import CreateOrderPage from "../components/CreateOrderPage/CreateOrderPage";
import OrderDetailPage from "../page/OrderDetailPage";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/otpMethod" element={<OtpMethod />} />
          <Route path="/otpverify" element={<OtpPage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/createOrderPage" element={<CreateOrderPage />} />
          <Route path="/orderDetailPage" element={<OrderDetailPage />} />





        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
