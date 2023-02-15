import React from "react";
import DeckView from "./DeckView";

function DeckList({ decks }){
  
      if(Object.entries(decks.length)){
        return (
        <>
            {decks.map((deck) => (
              <DeckView deck={deck} key={deck.id}/>
            ))}
        </>
      )
  }
}

export default DeckList