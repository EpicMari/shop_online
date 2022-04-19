import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import Contact from "../views/Contact";
import HeaderTemplate from "../templates/HeaderTemplate";
import RegisterPage from "../views/RegisterPage";
import LoginPage from "../views/LoginPage/LoginPage";
import Orders from "../views/Orders";
import SingleProduct from "../views/SingleProduct/SingleProduct";
import Home from "../views/Home/Home";
import Payment from "../views/Payment/Payment";
import Checkout from "../views/Checkout/Checkout";
import Products from "../views/Products/Products";

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
