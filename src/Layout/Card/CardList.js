import React from "react";
import { useParams } from "react-router-dom";
import { deleteCard, updateDeck } from "../../utils/api/index";
import CardView from "./CardView";

function CardsList({ deck }) {
    const { deckId } = useParams();

       const handleCardDelete = async ({ target }) => {
        const value = target.value;
        const confirm = window.confirm("Delete this card?\n\nYou will not be able to recover it.");
            if (confirm) {
                deleteCard(value)
                .then(updateDeck(deckId))
                .then(window.location.reload());
            }
        }
        
        return (
        <div className="container">
          <h2>Cards</h2>
                {deck.cards.map((card, index) => (
                <div className="card-list" key={index}>
                    <CardView 
                        card={card} 
                        handleCardDelete={handleCardDelete} 
                        deckId={deckId}
                    />
                </div>
                ))}
            </div>
        )
    };

    export default CardsList;