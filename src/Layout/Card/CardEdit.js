import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../../utils/api";
import BreadCrumb from "../Common/Breadcrumb";
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
                    <div className="row"><label htmlFor="front">Front</label></div>
                    <div className="row">
                        <textarea 
                            id="front"
                            name="front"
                            placeholder="  Front side of card"
                            rows="4"
                            value={card.front}
                            onChange={handleChange}
                            required={true}
                        />
                    </div>
                    <div className="row"><label htmlFor="back">Back</label></div>
                    <div className="row">
                        <textarea
                            id="back"
                            name="back"
                            placeholder="   Back side of card"
                            rows="4"
                            value={card.back}
                            onChange={handleChange}
                            required={true}
                        />
                    </div>
                    <div className="row space-top">
                    <button type="submit" className="btn btn-secondary" onClick={() => history.push(`/decks/${deckId}`)}>Cancel</button>
                    <button type='submit' className="btn btn-primary space-between" onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </>
    )

}

export default CardEdit