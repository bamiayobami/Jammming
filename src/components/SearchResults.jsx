import Tracklist from './Tracklist';
import Playlist from './Playlist';

const SearchResults = ({tracklist, playlist}) => {
    

    return (
        <>
            <Tracklist tracks={tracklist} />
            <Playlist tracks={playlist} />
        </>
    )
}

export default SearchResults;