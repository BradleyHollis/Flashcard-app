import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import BreadCrumb from "../Common/Breadcrumb";
import StudyCard from '../Card/StudyCard';

function StudyDeck(){

    const [deck, setDeck] = useState({});
    const { deckId } = useParams();

    useEffect(() => {
        async function loadDeck(){
            const newDeck = await readDeck(deckId);
            setDeck(newDeck)
        }
        loadDeck();
    }, [deckId]);
    
    if (Object.keys(deck).length) {
        return (
        <>
        <BreadCrumb path={`/decks/${deckId}`} pathName={deck.name} currentPage={"Study"} />
        <div className="col">
            <div className="row">
                <h2>Study: {deck.name}</h2>
            </div>
            <div className="row">
                <StudyCard cards={deck.cards}/> 
            </div>
        </div>
        </>
      )
    }

    return "Loading deck here..."
}

export default StudyDeck;