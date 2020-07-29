import React, { useState } from 'react';
import store, { viewDetail } from '../store';
import { addtoCart } from './StoreActionAPI';
import { connect } from 'react-redux';


function SingleProduct(props) {

    const [showDescription, setShowDescription] = useState(false);


    return (
        <div class='product'>
            <img src={props.img} alt={props.alt} />
            <h3>{props.name}</h3>
            {/* <p>{props.description}</p> */}
            <p>Price: ${props.price}</p>
            <p>Stock: {props.inStock}</p>
            <div class='img'>
                <img width="200" height="200" src="https://image.freepik.com/free-vector/new-product-coming-soon-poster-background-design_7102-179.jpg"></img>
                <br />
                <button onClick={() => {
                    let display = addtoCart(props.product)
                    // props.dispatch(display)
                }}

                >Add To Cart</button>
                <button onClick={() => {
                    setShowDescription(!showDescription)
                    let display = viewDetail(props.product)
                    props.dispatch(display)
                }}

                >View Details</button>
                <div>
                    {showDescription ? props.description : null}
                </div>
            </div>
        </div>
        //call the reducer with a specified action
    );
}


// export default SingleProduct;
export default connect()(SingleProduct);

