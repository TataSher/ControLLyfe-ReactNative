import createDataContext from './createDataContext'
import axios from 'axios'

const userReducer = (state, action) => {
  switch (action.type) {
    case 'save_user':
      return action.payload;
    case 'delete_user':
      return false;
    default:
      return state;
  }
};

const saveUser = (dispatch) => {
  return async (username, password, callback) => {
    await axios.post("http:localhost:3000/signup", { username, password })
      .then((res) => {
        console.log(res.data.userId)
        // Should be token but could not get it working
        dispatch({ type: 'save_user', payload: res.data.userId});
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
  { saveUser },
  false
);