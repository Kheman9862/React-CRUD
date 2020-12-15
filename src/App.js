import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Main } from "./components/Main" 
import AddUserName from "./components/AddUserName";
import EditUserName from "./components/EditUserName";
import { SharedProvider } from "./Shared/context";
import "./App.css"

// There are three routes Main,Edit page and Add Page and all of them are provided with the context/data that can be used any of these components 

const App = () => {
  return (
    <div className="App">
      <SharedProvider>
      <h1>SuperApp</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/add" component={AddUserName} />
          <Route exact path="/edit/:id" component={EditUserName} />
        </Switch>  
      </Router>    
      </SharedProvider>
    </div>
  );
}

export default App;