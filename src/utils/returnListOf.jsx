import Track from "../components/Track";

const returnListOf = (songs, sign, changeLabelColor) => {
    return  songs.map( (song, index) => {
       return  <li key={index}>
            <Track song={song} sign={sign} onHover={changeLabelColor}/>
        </li>
    })
}

export { returnListOf };
