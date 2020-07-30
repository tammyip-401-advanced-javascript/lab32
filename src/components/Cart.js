import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Link
} from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';


function Cart(props) {
  console.log(props)
  const list = (
    <div
      onClick={() => props.dispatch({ type: 'TOGGLE_DRAWER', payload: false })}
    >
    </div>)

  let cartHTML = [];

  if (props.cart) {
    props.cart.forEach((cartItem) => {
      cartHTML.push(
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
          <div>
            {cartItem.name}
          </div>
          <button id='remove'
            onClick={(e) => {
              props.dispatch({
                type: 'REMOVE_FROM_CART',
                payload: cartItem,
              })
            }}
          > Remove
           </button>
        </Grid>
      )
    })
  }
  return (
    <>
      <Link to="/cart"> <div id='cart'
      // console.log(cartMenu)
      //   if (item.length === 0) {
      //     setItem(cartHTML)
      //   } else {
      //     setItem([]);
      //   }
      // }}
      >Checkout / Your Cart {props.cartCount}</div></Link>
      {/* {cartMenu ? cartHTML : null} */}
      {/* {cartHTML} */}
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="flex-end"
      >
        {cartHTML}
      </Grid>
      <Drawer anchor={'right'} open={props.drawer}>
        {list}
        <IconButton
          edge='start'
          color='inherit'
          onClick={() =>
            props.dispatch({ type: 'TOGGLE_DRAWER', payload: false })
          }
        >
        </IconButton>
      </Drawer>

    </>
  );
}

const mapStateToProps = (state) => ({
  cartCount: state.reducer.cartCount,
  cart: state.reducer.cart,
});

// export default Header;
export default connect(mapStateToProps)(Cart);
