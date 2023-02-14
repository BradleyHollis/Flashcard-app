import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import 
{ BrowserRouter as Router, 
  Route,
  Switch,
  Link } from "react-router-dom";
import DeckCreate from './Deck/DeckCreate'
import Deck from "./Deck/Deck";
import Home from './Home'

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
        <Route exact path='/decks/:deckId'>
          <Deck/>
        </Route>
        
        <NotFound />
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default Layout;
