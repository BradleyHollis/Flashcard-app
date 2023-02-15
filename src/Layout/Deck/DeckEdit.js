import { useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { readDeck, updateDeck } from "../../utils/api";
import BreadCrumb from "../Common/Breadcrumb";

function DeckEdit(){
    const { deckId } = useParams();

    const initialFormState = {
        name: "",
        description: "",
    }

    const [deck, setDeck] = useState({ ...initialFormState });
    const history = useHistory();

    useEffect(() => {
        async function loadDeck() {
            try {
                const loadedDeck = await readDeck(deckId);
                setDeck(loadedDeck);
            } catch (error) {
                if (error.name!=="AbortError") {
                    throw error;
                }
            }
        }
        loadDeck();
    }, [deckId]);

    const handleChange = ({ target }) => {
        setDeck({
            ...deck,
            [target.name]: target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        async function updateDeckData(){
            await updateDeck(deck)
            history.push(`/decks/${deck.id}`)
        }
        updateDeckData();
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <BreadCrumb path={`/decks/${deckId}/edit`} pathName={deck.name} currentPage='Edit'/>
            <div className="col">
                <div className="row"><label htmlFor="name">Name</label></div>
                <div className="row">
                    <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder=" Deck name"
                    value={deck.name}
                    onChange={handleChange}
                    cols='100'
                    required={true}
                    />
                </div>
                <div className="row"><label htmlFor="description">Description</label></div> 
                <div className="row">
                    <textarea
                        id="description"
                        name="description"
                        placeholder=" Brief description of the deck"
                        value={deck.description}
                        onChange={handleChange}
                        required={true}
                        cols='100'
                        rows='5'
                    />
                </div>
            </div>
            <div className="button-grouping space-top">
                <button className='btn btn-secondary' type="submit" onClick={() => history.push(`/decks/${deckId}`)}>Cancel</button>
                <button className='btn btn-primary' type="submit">Submit</button>
            </div>
        </form>
        </>
    )
}

export default DeckEdit;