import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/roooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        //! Error page becomes default if path doesnt exist
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
