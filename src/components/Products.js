import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SingleProduct from './SingleProduct';
import * as actions from './StoreActionAPI';

configure({ adapter: new Adapter() });

function Products(props) {
    const { products, getProducts } = props
    useEffect(() => {
        getProducts()
    }, [getProducts])

    function addToCart(indx) {
        props.dispatch({ type: 'ADD_TO_CART', payload: props.products[indx] });
    }

    function viewDetails(indx) { }

    let productsHTML = [];
    if (products) {
        const filteredProducts = products.filter(
            (product) => product.category === props.currentCategory,
        );

        // create the HTML for all filtered products

        for (let i = 0; i < filteredProducts.length; i++) {
            let product = filteredProducts[i];

            productsHTML.push(
                <SingleProduct
                    key={i}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    inStock={product.inStock}
                    add={(e) => {
                        addToCart(i);
                    }}
                    view={(e) => {
                        viewDetails(i);
                    }}
                    product={product}
                />,
            );
        }
    }

    return (
        <Grid id='products' container spacing={4}>
            {productsHTML}
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.reducer.products,
        currentCategory: state.reducer.currentCategory,
    }
};
const mapDispatchToProps = (dispatch) => ({
    getProducts: () => dispatch(actions.getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);
