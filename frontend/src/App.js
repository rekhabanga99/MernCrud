import './App.css';
import EmployeeDetail from './conponents/EmployeeDetails';
import EditEmployee from './conponents/EditEmployee';
import { BrowserRouter as Router, Route,Switch,withRouter} from "react-router-dom";
function App(props) {
  return (
 
     <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={EmployeeDetail} />
          <Route exact path="/EditEmployee/editID/:id" component={EditEmployee} />
        </Switch>
      </div>
    </Router>
 
  );
}
 
export default App;