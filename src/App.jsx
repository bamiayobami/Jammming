import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

import {useState, useEffect} from 'react';
import fetchList from './utils/fetchList';



const App = () => {
  const [trackList, setTrackList] = useState([
      'song1', 'song2', 'song3',
      'song1', 'song2', 'song3',
      'song1', 'song2', 'song3',
  ])

  const [playList, setPlaylist] = useState([
        'song1', 'song2', 'song3',
  ])

  const fetchListArray = async (searchInput, filter) => {
    // postulations
    const result = await fetchList(searchInput, filter); // postulste;

     
     alert(searchInput + ', ' + filter) // in place of console

      // setListArray(result) postulate;
    }

  return (
    <>
      <title>Jammming</title>

      <header className="content">
        <h1>Jamming</h1>
        <p>Search your favourite songs.</p>
        { /* <!-- Search Head --> */ }
        <SearchBar onFetchList={fetchListArray}/>
      </header>

      <main>
        { /* <!-- Results --> */ }
        <div className="results-playlists">
          { /* <!-- Results Div --> */ }
          <SearchResults tracklist={trackList} playlist={playList}/>
        </div>
      </main>

      <footer>
        &copy; <a href='https://bamiayobami.github.io/' target="_blank">bamiayobami</a>
      </footer>
    </>
  );
};

//

export default App;
