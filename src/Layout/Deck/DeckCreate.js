import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { createDeck } from "../../utils/api";
import BreadCrumb from '../Common/Breadcrumb';
import '../style.css'

function DeckCreate(){

    const initialFormState = {
        name: "",
        description: "",
    }

    const [formData, setFormData] = useState({ ...initialFormState });

    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name] : target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        async function addDeck(){
            try {
                const toAdd = await createDeck(formData);
                history.push(`/decks/${toAdd.id}`)
            } catch (error) {
                if (error===!"AbortError") {
                    throw error;
                }
            }
        }
        addDeck();
    }

    const history = useHistory();

    return (
        <>
        <BreadCrumb currentPage="Library"/>
        <h2>Create Deck</h2>
         <form onSubmit={handleSubmit}>
            <div className="col">
                <div className="row"><label htmlFor="name">Name</label></div>
                <div className="row">
                    <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder=" Deck name"
                    value={formData.name}
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
                        value={formData.description}
                        onChange={handleChange}
                        required={true}
                        cols='100'
                        rows='5'
                    />
                </div>
            </div>
            <div className="button-grouping space-top">
                <button className='btn btn-secondary' type="submit" onClick={() => history.push('/')}>Cancel</button>
                <button className='btn btn-primary' type="submit">Submit</button>
            </div>
         </form>
        </>
    )
}

export default DeckCreate;