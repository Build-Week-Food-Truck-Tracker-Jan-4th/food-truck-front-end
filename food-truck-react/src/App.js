import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";

import OperatorDashboard from "./components/OperatorDashboard";
import DinerDashboard from "./components/DinerDashboard";
import LandingPage from "./components/LandingPage";
import FoodTruck from "./components/FoodTruck";
import EditFoodTruck from "./components/EditFoodTruck";
import dummyData from './components/dummyDataBrennan';

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={LandingPage}/>
        <Route path="/operator-dashboard" >
          <OperatorDashboard trucks={dummyData} />
        </Route>
        <Route path="/diner-dashboard" >
          <DinerDashboard trucks={dummyData} />
        </Route>
        <Route path="/trucksOwned/:itemID">
          <FoodTruck trucks={dummyData} />
        </Route>
        <Route path="/edit-truck/:itemID">
          <EditFoodTruck trucks={dummyData} />
        </Route>
    </div>
  );
}

export default App;