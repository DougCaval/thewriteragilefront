import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../views/Home/Index";
import Task from "../views/Task/Index";
import QrCode from "../views/QrCode/Index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/estorias" exact component={Task} />
        <Route path="/estorias/:id" exact component={Task} />
        <Route path="/qrcode" exact component={QrCode} />


      </Switch>
    </BrowserRouter>
  );
}
