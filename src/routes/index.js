import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home/Index.js";
import Task from "../views/Task/Index.js";
import QrCode from "../views/QrCode/Index.js";

export default function AplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/estorias" exact component={Task} />
        <Route path="/estorias/:id" exact component={Task} />
        <Route path="/qrcode" exact component={QrCode} />


      </Routes>
    </BrowserRouter>
  );
}
