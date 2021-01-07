import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import DinerForm from "./components/dinerForm";
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
      <Route exact path="/diner-login" component={DinerForm} />
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
