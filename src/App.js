import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AgriPurchaseManagement from "./components/AgriPurchaseManagement";
import AgriInputMasterMaintenance from "./components/AgriInputMasterMaintenance";
import AgriInputPurchaseRequest from "./components/AgriInputPurchaseRequest";
import SupplierMasterMaintenance from "./components/SupplierMasterMaintenance";
import TaxMasterMaintenance from "./components/TaxMasterMaintenance";
import "./components/utils/styles.css";

function App() {
  const components = [
    AgriPurchaseManagement,
    AgriInputMasterMaintenance,
    SupplierMasterMaintenance,
    AgriInputPurchaseRequest,
    TaxMasterMaintenance,
  ];

  const links = [
    "/agri-purchase-management",
    "/agri-input-master-maintenance",
    "/supplier-master-maintenance",
    "/",
    "/tax-master-maintenance",
  ];

  return (
    <Router>
      <div className="App">
        <Switch>
          {components.map((component, index) => (
            <Route
              key={index}
              exact
              path={links[index]}
              component={component}
            ></Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
