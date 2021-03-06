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

export const removeCart = (id) => {
  return req('delete', `api/livejs/v1/customer/yunlew531/carts/${id}`);
};

export const removeAllCarts = () => {
  return req('delete', 'api/livejs/v1/customer/yunlew531/carts');
};

export const axiosQuantity = (data) => {
  return req('patch', 'api/livejs/v1/customer/yunlew531/carts', data);
};

export const submitOrder = (data) => {
  return req('post', 'api/livejs/v1/customer/yunlew531/orders', data);
};

export const getOrders = () => {
  return req('get', 'api/livejs/v1/admin/yunlew531/orders');
};

export const editOrderStatus = (data) => {
  return req('put', 'api/livejs/v1/admin/yunlew531/orders', data);
};

export const deleteAllOrders = () => {
  return req('delete', 'api/livejs/v1/admin/yunlew531/orders');
};

export const deleteAOrder = (id) => {
  return req('delete', `api/livejs/v1/admin/yunlew531/orders/${id}`);
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
