import React from "react";
import { useParams } from "react-router-dom";
import CardView from "./CardView";

function CardsList({ deck }) {
    const { deckId } = useParams()
        return (
        <div className="container">
          <h2>Cards</h2>
                {deck.cards.map((card, index) => (
                <div className="card-list" key={index}>
                    <CardView 
                        key={index}
                        deckId={deckId}
                        card={card}
                    />
                </div>
                ))}
            </div>
        )
    };

    export default CardsList;