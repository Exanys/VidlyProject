



import React from "react";
import './App.css';
import MoviePage from "./component/moviePage";
import Customers from "./component/customers";
import Rentals from "./component/rentals";
import Navbar from "./component/navbar";
import NotFound from "./component/notFound";
import MovieContent from "./component/movieContent";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/movies/:id" component={MovieContent} />
          <Route path="/movies" component={MoviePage} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={MoviePage} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
