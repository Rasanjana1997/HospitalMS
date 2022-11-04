import AddEmployer from './components/AddEmployer';
import Header from './components/header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import viewEmployees from './components/viewEmployees';
import AddPatient from './components/AddPatient';
import Dashboard from './components/Dashboard';
import Doctor from './components/Doctor';
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route path="/patient" exact component={viewEmployees} />
        <Route path="/add" exact component={AddPatient} />
        <Route path="/" exact component={Dashboard} />
        <Route path="/doctor" exact component={Doctor} />
      </div>
    </Router>
  );
}

export default App;
