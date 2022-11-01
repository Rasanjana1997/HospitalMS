import AddEmployer from './components/AddEmployer';
import Header from './components/header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import viewEmployees from './components/viewEmployees';
import AddPatient from './components/AddPatient';
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route path="/" exact component={viewEmployees} />
        <Route path="/add" exact component={AddPatient} />
      </div>
    </Router>
  );
}

export default App;
