import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import SignUpForm from "./components/SignUpForm";
import Login from "./components/Login";
import OperatorDashboard from "./components/OperatorDashboard";
import DinerDashboard from "./components/DinerDashboard";
import LandingPage from "./components/LandingPage";
import FoodTruck from "./components/FoodTruck";
import EditFoodTruck from "./components/EditFoodTruck";
import AddFoodTruck from "./components/AddFoodTruck";
import dummyData from "./components/dummyDataBrennan";


function App() {
  return (
    <div className="App">

      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={DinerForm} />
      <Route exact path="/sign-up" component={SignUpForm} />
      <Route path="/operator-dashboard">
        <OperatorDashboard trucks={dummyData} />
      </Route>
      <Route path="/diner-dashboard">
        <DinerDashboard trucks={dummyData} />
      </Route>
      <Route path="/trucksOwned/:itemID">
        <FoodTruck trucks={dummyData} />
      </Route>
      <Route path="/edit-truck/:itemID">
        <EditFoodTruck trucks={dummyData} />
      </Route>
      <Route path="/add-truck">
        <AddFoodTruck />
      </Route>
    </div>
  );
}

export default App;
