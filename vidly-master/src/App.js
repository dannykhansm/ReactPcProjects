import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./components/Movies";
import Customer from "./components/Customer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Rentals from "./components/Rentals";
import MovieForm from "./MovieForm";

function App() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customer} />
          <Route path="/Rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
