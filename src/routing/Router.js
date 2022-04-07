import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import Home from "../views/Home";
import Products from "../views/Products";
import Contact from "../views/Contact";
import HeaderTemplate from "../templates/HeaderTemplate";
import RegisterPage from "../views/RegisterPage";
import LoginPage from "../views/LoginPage";
import SingleProduct from "../views/SingleProduct";
import Checkout from "../views/Checkout";
import Orders from "../views/Orders";
import Payment from "../views/Payment";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderTemplate>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.products} component={Products} />
            <Route path={routes.contact} component={Contact} />
            <Route path={routes.register} component={RegisterPage} />
            <Route path={routes.login} component={LoginPage} />
            <Route path={routes.product} component={SingleProduct} />
            <Route path={routes.checkout} component={Checkout} />
            <Route path={routes.orders} component={Orders} />
            <Route path={routes.payment} component={Payment} />
          </Switch>
        </HeaderTemplate>
      </BrowserRouter>
    </>
  );
};

export default Router;
