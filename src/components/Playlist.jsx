import { useState } from "react";
import { returnListOf } from "../utils/returnListOf";

const Playlist = ({tracks}) => {
    const [hovered, setHovered] = useState(false);

    const changeLabelColor = () => {
        setHovered(!hovered);
    }

    const labelStyle = {
        color: hovered ? 'blue' : '',
    }

    const songs = returnListOf(tracks, '-', changeLabelColor);

    return (
        <div>
            <ul>
                <li>
                    <span>Playlist</span> 
                    <span className="right" style={labelStyle}>Remove</span>
                    <hr/>
                </li>
                {songs}
            </ul>
            <button type="button">Save to Spotify</button>
        </div>
    )
}

export default Playlist;