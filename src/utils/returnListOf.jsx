import Track from "../components/Track";

const returnListOf = (tracks, sign, changeLabelColor, updatePlayList) => {
    return  tracks.map( (track, index) => {
       return  <li key={index}>
            <Track track={track} sign={sign} onHover={changeLabelColor} onClick={updatePlayList} />
        </li>
    })
}

export { returnListOf };
