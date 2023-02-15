import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import CardForm from "./CardForm";
import BreadCrumb from "../Common/Breadcrumb";
import { readCard, readDeck, updateCard } from "../../utils/api";

function CardEdit(){

    const { deckId, cardId } = useParams();
    const history = useHistory();

    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({});

    useEffect(() => {
        const loadDeck = async () => setDeck(await readDeck(deckId));
        loadDeck();
        const loadCard = async () => setCard(await readCard(cardId));
        loadCard();
    }, [deckId, cardId]);

    const handleChange = ({ target }) => {
        setCard({
            ...card,
            [target.name]: target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        async function updateCardData(){
            try {
                await updateCard(card);
                history.push(`/decks/${deckId}`)
            } catch (error){
                if(error.name !== "AbortError"){
                    throw error
                }
            }
        }
        updateCardData();
    }


    return (
        <>
        <BreadCrumb path={`/decks/${deckId}`} pathName={deck.name} currentPage={`Edit Card ${cardId}`}/>
            <div className="col">
                    <div className="row">
                        <h2>{deck.name}: Edit Card</h2>
                    </div>
                    <CardForm 
                      formData={card} 
                      handleChange={handleChange} 
                      handleSubmit={handleSubmit}
                    />
                    <div className="row space-top">
                    <button type="submit" className="btn btn-secondary" onClick={() => history.push(`/decks/${deckId}`)}>Cancel</button>
                    <button type='submit' className="btn btn-primary space-between" onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </>
    )

}

export default CardEdit