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
import StudyDeck from "./Deck/StudyDeck";
import CreateCard from "./Card/CreateCard";
import DeckEdit from "./Deck/DeckEdit";
import CardEdit from "./Card/CardEdit";

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
        <Route path='/decks/:deckId/cards/:cardId/edit'>
          <CardEdit/>
        </Route>
        <Route exact path='/decks/:deckId'>
          <Deck/>
        </Route> 
        <Route path='/decks/:deckId/cards/new'>
          <CreateCard/>
        </Route>
        <Route path='/decks/:deckId/edit'>
          <DeckEdit/>
        </Route>
        <Route path='/decks/:deckId/study'>
          <StudyDeck/>
        </Route>     
        <NotFound/>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default Layout;
