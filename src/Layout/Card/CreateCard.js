import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import BreadCrumb from "../Common/Breadcrumb";
import '../style.css';
function CreateCard(){

    const { deckId } = useParams();

    const initialFormState = {
        front: "",
        back: "",
    };

    const [deck, setDeck] = useState([]);
    const [formData, setFormData] = useState({ ...initialFormState });

    const history = useHistory();

    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createCard(deckId, formData);
            setFormData({ ...initialFormState });
            console.log(formData)
        } catch (error){
            if(error.name === 'AbortError'){
                throw error;
            }
        }
    };

    useEffect(() => {
        async function loadDeck(){
            const loadedDeck = await readDeck(deckId);
            setDeck(() => loadedDeck);
        }
        loadDeck();
    }, [deckId]);

    return (
        <>
        <BreadCrumb path={`/decks/${deckId}`} pathName={deck.name} currentPage="Add Card"/>
        <div className="col">
                <div className="row">
                    <h2>{deck.name}: Add Card</h2>
                </div>
                <div className="row"><label htmlFor="front">Front</label></div>
                <div className="row">
                    <textarea 
                        id="front"
                        name="front"
                        placeholder="  Front side of card"
                        rows="4"
                        value={formData.front}
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
                        value={formData.back}
                        onChange={handleChange}
                        required={true}
                    />
                </div>
                <div className="row space-top">
                <button type="submit" className="btn btn-secondary" onClick={() => history.push(`/decks/${deckId}`)}>Done</button>
                <button type='submit' className="btn btn-primary space-between" onClick={handleSubmit}>Save</button>
            </div>
            </div>
        </>
    )
}

export default CreateCard;