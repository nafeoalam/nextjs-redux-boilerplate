import { AUTH_LOGIN, AUTH_REG, AUTH_LOGIN_FAILED, AUTH_REG_FAILED } from '../store-constants';
import * as api from '../../_endpoints/routes/auth.api';


export const login = (formData, router) => async (dispatch) => {
  try {
    //const { data } = await api.signIn(formData);
    const { data } = { data: 'test' }

    dispatch({ type: AUTH_LOGIN, data });

    router.push('/dashboard');
  } catch (error) {
    dispatch({ type: AUTH_LOGIN_FAILED, error });
  }
};

export const register = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH_REG, data });
  } catch (error) {
    dispatch({ type: AUTH_REG_FAILED, error });
  }
};