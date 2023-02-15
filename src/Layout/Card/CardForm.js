import React from "react";

function CardForm({ formData, handleChange, handleSubmit }) { 

    return (
        <form onSubmit={handleSubmit}>
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
        </form>
    )
}

export default CardForm;