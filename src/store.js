import { createStore } from 'redux';

const initState = {
    categories: [
        { name: 'Electronics', display_name: 'Electronics' },
        { name: 'Clothing', display_name: 'Clothing' },
        { name: 'Supplements', display_name: 'Supplements' },
    ],
    products: [
        // { name: 'Facial Steamer', category: 'Electronics', price: 199.0, inStock: 5, description: 'a simple beauty device that emits steam' },
        // { name: 'Hairdryer', category: 'Electronics', price: 79.0, inStock: 15, description: 'strong airflows and dries hair quickly' },
        // { name: 'Shirt', category: 'Clothing', price: 30.0, inStock: 25, description: 'available in multiple colors' },
        // { name: 'Dress', category: 'Clothing', price: 50.0, inStock: 10, description: 'available in multiple colors' },
        // { name: 'Clear Skin Formula', category: 'Supplements', price: 20.99, inStock: 500, description: 'addresses skin health internally, to promote a clear complexion' },
        // { name: 'Collagen Powder', category: 'Supplements', price: 29.99, inStock: 12, description: 'supplement for healthier skin, hair, and joints' },
        // { name: 'Beauty Gummies', category: 'Supplements', price: 11.99, inStock: 90, description: 'multivitamins for health skin' },
    ],
    currentCategory: '',
    cart: [],
    cartCount: 0,
    drawer: false,
    activeProduct: {},
};

//Create Reducer
const reducer = (state = initState, action) => {
    const { payload, type } = action

    let newState = { ...state };

    switch (type) {
        case 'SET_CURRENT_CATEGORY':
            newState.currentCategory = payload.payload;
            break;
        case 'ADD_TO_CART':
            newState.cart.push(payload);
            newState.cartCount++;
            //if the name of product in Redux is equal to the product in API, then decrease the inStock property
            for (var i = 0; i < newState.products.length; i++) {
                if (newState.products[i]._id === payload._id) {
                    let newInStock = newState.products[i].inStock - 1;
                    newState.products[i].inStock = newInStock;
                }
            }
            break;
        case 'REMOVE_FROM_CART':
            newState.cartCount--;
            //show the cart without the content that got removed
            newState.cart = newState.cart.filter((val) => {
                return val.name !== payload.name;
            });
            break;
        case 'TOGGLE_DRAWER':
            newState.drawer = payload;
            break;
        case 'ADD_PRODUCT':
            newState.products.push(payload);
            break;
        case 'RESET_STORE':
            newState = { ...initState };
            break;
        case 'VIEW_DETAIL':
            newState.activeProduct = payload;
            console.log(newState.activeProduct)
            break;
        case 'GET_PRODUCTS':
            console.log(payload)
            newState.products = payload;
            break;
        case 'GET_CATEGORIES':
            newState.categories = payload;
            break;
        default:
            break;
    }
    return newState;
};

//Create Action
const addtoCart = (product) => {
    return { type: 'ADD_TO_CART', payload: product };
};

const removeFromCart = (product) => {
    return { type: 'REMOVE_FROM_CART', payload: product };
};

const viewDetail = (product) => {
    return { type: 'VIEW_DETAIL', payload: product };
};

export default reducer;
export { reducer };
export { addtoCart, removeFromCart, viewDetail };
