import React from "react";
import './App.css';
import MoviePage from "./component/moviePage";
import Customers from "./component/customers";
import Rentals from "./component/rentals";
import Navbar from "./component/navbar";
import NotFound from "./component/notFound";
import MovieForm from "./component/movieForm";
import { Route, Redirect, Switch } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={MoviePage} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from='/' to='/movies' exact />
            <Redirect to="/not-found" />
          </Switch>
        </main>
    </React.Fragment>
  );
}

export default App;
