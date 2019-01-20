import axios from 'axios';
import { API_URL } from '../config';
import routes from 'src/Common/routes';
import { authHeaders } from 'src/Common/api';

export const addProductToCart = (token: string, userId: string, product: any) =>
  axios({
    method: 'POST',
    url: `${API_URL}${routes.addToCart}`,
    headers: authHeaders(token),
    data: {
      productId: product.id,
      userId: userId,
      title: product.title,
      price: product.price,
      quantity: product.quantity ? product.quantity : 1,
    },
  });
