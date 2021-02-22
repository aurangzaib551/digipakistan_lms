import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles/styles.scss";
import { BrowserRouter } from "react-router-dom";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import fbConfig from "./config/fbConfig";
import "@fortawesome/fontawesome-free/css/all.css";

const store = createStore(
  rootReducer,
  compose(
    reactReduxFirebase(fbConfig, {
      attachAuthIsReady: true,
      useFirestoreForProfile: true,
      userProfile: "users",
    }),
    reduxFirestore(fbConfig),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
});
