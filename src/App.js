import React from 'react';
import "./styles/styles.scss";

import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from '@material-ui/core';
import Checkout from './components/Checkout';

import CurrentCategory from './components/CurrentCategory';
import Categories from './components/Categories';
import Products from './components/Products';
import Cart from './components/Cart';
import { BrowserRouter, Route } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Cart />
            <Container>
                <Route path="/" exact>
                    <Categories />
                    <CurrentCategory />
                    <Products />
                </Route>
                <Route path="/cart" component={Checkout} />

            </Container>
            <Footer />
        </BrowserRouter>
    );
}
