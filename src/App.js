import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "./loader/loader";
const LogIn = lazy(() => import("./pages/login"));
const Dashboard = lazy(() => import("./pages/dashboard"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact component={LogIn} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Suspense>
  );
};

export default App;
