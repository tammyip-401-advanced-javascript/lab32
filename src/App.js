import React from 'react';
import "./styles/styles.scss";

import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from '@material-ui/core';

import CurrentCategory from './components/CurrentCategory';
import Categories from './components/Categories';
import Products from './components/Products';
import Cart from './components/Cart';

export default function App() {
    return (
        <>
            <Header />
            <Cart />
            <Container>
                <Categories />
                <CurrentCategory />
                <Products />
            </Container>
            <Footer />
        </>
    );
}
