import api from '../api';
import { API_ENDPOINT_LOGIN } from '../../constants';

export const Login = (cred) => (dispatch) => {
    
    api
      .post(API_ENDPOINT_LOGIN, cred)
      .then((res) => {
        if (res.status === 200) {
          console.log(res)
        }
      })
      .catch((err) => {
          console.log(err)
      });
  };