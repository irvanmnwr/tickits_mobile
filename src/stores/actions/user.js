import axios from '../../utils/axios';

export const getUserById = id => {
  return {
    type: 'GET_USER_BY_ID',
    payload: axios.get(`user/${id}`),
  };
};

export const updateUser = form => {
  return {
    type: 'UPDATE_USER',
    payload: axios.patch('user/update', form),
  };
};

export const updatePassword = form => {
  return {
    type: 'UPDATE_USER_PASSWORD',
    payload: axios.patch('user/updatePassword', form),
  };
};
