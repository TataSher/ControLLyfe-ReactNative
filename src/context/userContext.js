import createDataContext from './createDataContext'
import axios from 'axios'

const userReducer = (state, action) => {
  switch (action.type) {
    case 'save_user':
      return action.payload;
    case 'get_user':
      return state;
    case 'delete_user':
      return false;
    default:
      return state;
  }
};

const getUser = (dispatch) => {
  return (callback) => {
    dispatch({ type: 'get_user', payload: "add stuff"});

    if (callback) {
      callback();
    }
  };
};

const saveUser = (dispatch) => {
  return async (username, password, callback) => {
    await axios.post("http:localhost:3000/signup", { username, password })
      .then((res) => {
        console.log(res)
        dispatch({ type: 'get_user', payload: res.data.token});
        if (callback) {
          callback();
        }
      })
      .catch((error) => {
        console.log(error)
      })    
  }
}

export const { Context, Provider } = createDataContext(
  userReducer, 
  { getUser, saveUser},
  false
);