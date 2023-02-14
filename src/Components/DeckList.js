import React, {useState, useEffect} from "react";
import { listDecks } from "../utils/api";
import DeckView from "./DeckView";

function DeckList(){
    
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        listDecks().then((response) => setDecks(response))
        .catch((error) => console.log(error))
    },[])

    return (
    <>
        {decks.map((deck) => (
           <DeckView deck={deck} key={deck.id}/>
        ))}
    </>
    )
}

export default DeckList