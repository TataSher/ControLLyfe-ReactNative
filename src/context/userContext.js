import createDataContext from './createDataContext'

const userReducer = (state, action) => {
  switch (action.type) {
    case 'save_user':
      return state;
    case 'get_user':
      return state;
    case 'delete_user':
      return;
    default:
      return state;
  }
};

const getUser = (dispatch) => {
  return () => {
    dispatch({ type: 'get_user', payload: "add stuff"});
  };
};

const save_user = (dispatch) => {
  return (id, callback) => {

    // Callback will be navigate to home screen?
    if (callback) {
      callback();
    }
  }
}

export const { Context, Provider } = createDataContext(
  userReducer, 
  { getUser, save_user},
  false
);