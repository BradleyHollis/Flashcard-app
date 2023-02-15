import React from "react";
import { Link } from "react-router-dom";
import { TrashIcon } from "../Common/Icons";
import { deleteCard, updateDeck } from "../../utils/api/index";

function CardView({ card, deckId }){

    const handleCardDelete = async (cardId) => {
        const confirm = window.confirm("Delete this card?\n\nYou will not be able to recover it.");
            if (confirm) {
                deleteCard(cardId)
                .then(updateDeck(deckId))
                .then(window.location.reload());
            }
        }

    return (
        <div className="card" key={card.id}>
            <div className="card-body">
                <div className="container">
                    <div className="row justify-content-start my-2">
                        <div className="col-6">
                            {card.front}
                        </div>
                        <div className="col-6">
                            {card.back}
                        </div>
                    </div>
                <div className="row">
                    <div className="col-9">
                    </div>
                    <div className="col-3 pt-2 pb-1">
                        <Link to={`/decks/${deckId}/cards/${card.id}/edit`}><button className="btn btn-secondary mr-1"><i className="bi bi-pencil mr-1"></i>Edit</button></Link>
                        <button onClick={() => handleCardDelete(card.id)} className="btn btn-danger">
                            <i value={card.id}className="bi bi-trash">
                                <TrashIcon/>
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardView