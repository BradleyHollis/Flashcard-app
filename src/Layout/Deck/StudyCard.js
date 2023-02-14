import React, {useState} from "react";
import { useHistory, useParams, Link } from "react-router-dom";

function StudyCard({ cards }){

    const { deckId } = useParams();
    const history = useHistory();

    const [side, setSide] = useState(true);
    const [index, setIndex] = useState(0);
 
    const handleNext = () => {
        if(index < cards.length -1){
            setIndex(index + 1);
        } else {
            const response = window.confirm("Restart cards?\n\nClick 'cancel' to return to homepage");
            if(response){
                setIndex(0);
            } else {
                history.push('/')
            }
        }
        setSide(true);
    }

    const handleFlip = () => {
        setSide(!side);
    }

    if (cards.length > 2) {
        return (
           <div className="container">
            <div className="card w-100">
                <div className="card-body">
                    <h4 className="card-title">
                        Card {index + 1} of {cards.length}
                    </h4>
                    <p className="card-text font-weight-lighter">
                        {side
                        ? cards[index].front
                        : cards[index].back
                        }                      
                    </p>
                    <button className="btn btn-secondary mr-1" onClick={handleFlip}>Flip</button>
                    <button className="btn btn-primary" onClick={handleNext}>Next</button>
                </div>
            </div>
            </div>
        )
    } else {
        return (
            <>
            <div className="col">
                <div className="row">
                    <h3>Not enough cards.</h3>
                </div>
                <div className="row">
                    <p>You need at least 3 cards to study. There are {cards.length} cards in this deck.</p>
                </div>
                <div className="row">
                <Link to={`/decks/${deckId}/cards/new`}>
                    <button className="btn btn-primary">
                    <i class="bi bi-plus mr-1"></i>
                     Add Card
                    </button>
                </Link>
               </div>
            </div>
            </>
        )
    }
}

export default StudyCard;