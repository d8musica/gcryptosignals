export const signIn = (email, password) => {  

  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        dispatch({ type: "LOGIN_SUCCESS", user });
        // ...
      })
      .catch((error) => {
        
        let errorMessage = error.message;
        dispatch({ type: "LOGIN_ERROR", errorMessage });
      });
  };
};

export const signOut = () => {   
  
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      firebase.auth().signOut().then(() => {
        dispatch({type: 'LOGOUT_SUCCESS'})
      }).catch((error) => {
        dispatch({type: 'LOGOUT_ERROR', error})
      });
    };
  };
