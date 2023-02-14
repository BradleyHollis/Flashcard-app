import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import 
{ BrowserRouter as Router, 
  Route,
  Switch,
  Link } from "react-router-dom";
import DeckList from "../Components/DeckList";

function Layout() {
  return (
    <>
    <Router>
    <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
        <Route exact path='/'>
          <DeckList/>
        </Route>
        <NotFound />
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default Layout;
