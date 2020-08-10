import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import store from "./Redux/store";

import setAdminAuthToken from "./Component/Admin/SetAdminAuth/SetAdminAuthToken";
import PrivateRoutes from "./Component/Routes/PrivateRoutes";
import { CurrentUserSet } from "./Redux/Action/Admin/AuthAdmin";

// Components
import Header from "./Component/Comman/Header/Header";
import Footer from "./Component/Comman/Footer/Footer";
import SignIn from "./Component/AuthComponent/SignIn";
import HomeComponent from "./Component/HomeComponent/HomeComponent";
import AdminSignUp from "./Component/Admin/AdminAuth/AdminSignUp";
import AdminSignIn from "./Component/Admin/AdminAuth/AdminSignIn";
import AdminComponent from "./Component/Admin/AdminComponent";
import MenuListComposition from "./Component/Comman/Header/Menu";
import CreateUser from "./Component/Admin/CreateUser/CreateUser";
import EditUserForm from "./Component/Admin/EditUser/EditUserForm";
import TaskAssign from "./Component/Admin/TaskAssign/TaskAssign";

if (localStorage.jwtToken) {
  setAdminAuthToken(localStorage.jwtToken);
  const decode = jwt_decode(localStorage.jwtToken);
  store.dispatch(CurrentUserSet(decode));

  // Time over user logout
  const CTime = Date.now() / 1000;
  if (decode.exp < CTime) {
    localStorage.removeItem("jwtToken");
    window.location = "/admin/sign-in";
  }
}

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Header />

          <Switch>
            <Route path="/menu" component={MenuListComposition} />
            <PrivateRoutes
              path="/admin/edit-user/:userId"
              component={EditUserForm}
            />
            <PrivateRoutes path="/admin/task-assign" component={TaskAssign} />
            <PrivateRoutes path="/admin/create-user" component={CreateUser} />
            <Route path="/admin/sign-in" component={AdminSignIn} />
            <Route path="/admin/sign-up" component={AdminSignUp} />
            <PrivateRoutes path="/admin/dashbord" component={AdminComponent} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/" component={HomeComponent} />
          </Switch>

          <Footer />
        </Provider>
      </Router>
    </div>
  );
}

export default App;