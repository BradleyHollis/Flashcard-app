import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import 
{ BrowserRouter as Router, 
  Route,
  Switch,
  Link } from "react-router-dom";
import DeckList from "../Components/DeckList";
import DeckCreate from "../Components/DeckCreate";
import Home from "../Components/Home";

function Layout() {
  return (
    <>
    <Router>
    <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/decks/new'>
          <DeckCreate/>
        </Route>
        <NotFound />
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default Layout;
