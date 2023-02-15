import React, {useState, useEffect} from "react";
import { listDecks } from "../../utils/api";
import DeckView from "./DeckView";

function DeckList(){
    
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        setDecks([]);
        const abortController = new AbortController();

        async function loadDecks() {
          try {
            const loadedDecks = await listDecks();
            setDecks(() => loadedDecks);
          } catch (error) {
            if (error.name !== "AbortError") {
              throw error;
            }
          }
        }
        loadDecks();
        return() => abortController.abort();
      }, []);
    
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