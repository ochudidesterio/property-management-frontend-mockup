import React from "react";
import Navbar from "./components/navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import Reports from "./components/screens/Reports";
import Tenants from "./components/screens/Tenants";
import PropertDetails from "./components/PropertDetails";
import ClientProperties from "./components/ClientProperties";
import TenantProfile from "./components/TenantProfile";
import PropertyInfo from "./components/PropertyInfo";
import Clients from "./components/screens/Clients";
import Nav from "./components/navbar/Nav";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Nav/>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/clients" element={<Clients/>} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/tenant" element={<Tenants />} />
          <Route path="/details/:id" element={<PropertDetails />} />
          <Route path="/client/:id" element={<ClientProperties />} />
          <Route path="/tenant/:id" element={<TenantProfile />} />
          <Route path="/property/:id" element={<PropertyInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
