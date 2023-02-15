import React from "react";
import { useHistory } from "react-router-dom";
import DeckList from "../Deck/DeckList";
import { PlusIcon } from "../Common/Icons";

function Home({ decks }){
    
    const history = useHistory();

    return (
        <div>
          <div className="move-right">
            <button className='btn btn-secondary' onClick={() => history.push('/decks/new')}>
              <PlusIcon/>{` Create Deck`}
            </button>
        </div>
            <div>
                <DeckList decks={decks}/>
            </div>
        </div>
    )
}

export default Home;