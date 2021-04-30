import req from './api';

export const getCarts = () => {
  return req('get', 'api/livejs/v1/customer/yunlew531/carts');
};

export const getProducts = () => {
  return req('get', 'api/livejs/v1/customer/yunlew531/products');
};

export const addToCart = (data) => {
  return req('post', 'api/livejs/v1/customer/yunlew531/carts', data);
};

// export const userLogIn = (logInData) => {
//   return req('post', '/user/log-in', logInData)
// }

// export const userLogOut = () => {
//   return req('get', '/user/log-out')
// }

// export const userDelete = (userNo) => {
//   return req('delete', '/user/delete', userNo)
// }
