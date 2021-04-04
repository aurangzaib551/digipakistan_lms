export const signIn = (formData, setBtnLoading) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then(() => {
        dispatch({
          type: "SIGN_IN_SUCCESSFULLY",
          payload: "Sign in successfully",
        });
        setBtnLoading(false);
      })
      .catch((err) => {
        dispatch({
          type: "SIGN_IN_ERROR",
          payload: err.message,
        });
        setBtnLoading(false);
      });
  };
};

export const clearAll = () => {
  return {
    type: "CLEAR_ALL",
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut();
  };
};

export const forgotPassword = (emailAddress, setBtnLoading) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .sendPasswordResetEmail(emailAddress)
      .then(() => {
        dispatch({
          type: "RESET_PASSWORD",
          payload: `An email is sent to your ${emailAddress} for resetting the password`,
        });
        setBtnLoading(false);
      })
      .catch((err) => {
        dispatch({
          type: "RESET_PASSWORD_ERROR",
          payload: err.message,
        });
        setBtnLoading(false);
      });
  };
};
