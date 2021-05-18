import React, { useReducer } from 'react';

// Pass in what changes for different resources
export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => { return () => {} } }
    const boundActions = {};
    for (let key in actions) {
      // key === addBlogPost
      boundActions[key] = actions[key](dispatch);
    }

    // boundActions contains all the functions for changing state
    return (<Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>);
  }

  return { Context, Provider };
}