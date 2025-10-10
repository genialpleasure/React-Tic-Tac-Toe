import { useState } from "react";

export default function Player({ Initialname, symbol }) {
    const [playerName, setPlayerName] = useState(Initialname);
    const [isEditing, setIsEditing] = useState(false);

    function hanleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    //let btnCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = <input type="text" required defaultValue={playerName} onChange={handleChange} />;
        //btnCaption = 'Save';
    }
    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={hanleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}