import axios from 'axios';

export const getCategories = () => async (dispatch) => {
  let results = await axios.get(
    'https://js401n16-lab31.herokuapp.com/api/v1/categories',
  );
  dispatch(realGetCategories(results.data));
};

const realGetCategories = (payload) => {
  return {
    type: 'GET_CATEGORIES',
    payload,
  };
};

export const setCurrentCategories = (payload) => {

  return {
    type: 'SET_CURRENT_CATEGORY',
    payload,
  };
};

export const getProducts = () => async (dispatch) => {
  let results = await axios.get(
    'https://js401n16-lab31.herokuapp.com/api/v1/products',
  );
  dispatch(realGetProducts(results.data));
};

const realGetProducts = (payload) => {
  return {
    type: 'GET_PRODUCTS',
    payload,
  };
};

export const addtoCart = (product) => async (dispatch) => {
  let results = await axios.put(
    `https://js401n16-lab31.herokuapp.com/api/v1/products/${product._id}`,
    {
      ...product,
      inStock: product.inStock - 1,
    },
  );
  dispatch(AddToCartAction(results.data));
};

const AddToCartAction = (payload) => {
  return {
    type: 'ADD_TO_CART',
    payload,
  };
};

export const removeFromCart = (product) => async (dispatch) => {
  await axios.delete(
    `https://js401n16-lab31.herokuapp.com/api/v1/products/${product._id}`,
    {
      ...product,
      inStock: product.inStock + product.quantity,
    },
  );
  dispatch(RemoveFromCartAction(product));
};

const RemoveFromCartAction = (payload) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload,
  };
};