import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults';

import {useState} from 'react';
import fetchList from './utils/fetchList';

import data from './utils/mockData.js';



const App = () => {
  const [trackList, setTrackList] = useState(data.tracks);

  const [playList, setPlaylist] = useState([]);

  const fetchListArray = async (searchInput, filter) => {
    const result = await fetchList(searchInput, filter); // postulate;

     
     alert(searchInput + ', ' + filter) // in place of console
      // setListArray(result) postulate;
  }

  const updatePlayList = (track, action) => {
    // action: 'add' | 'remove' | 'clear'
    if (action === 'add') {
      // add track to playList
      if (!playList.find( item => item.id === track.id)) {
        setPlaylist([...playList, track]);
      } else { alert('Track already in playlist'); }
    } if (action === 'remove') {
      // remove track from playList
      const updatedList = playList.filter( item => item.id !== track.id);
      setPlaylist(updatedList);
    } else if (action === 'clear') {
      // clear entire playList
      setPlaylist([]);
    }
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
          <SearchResults tracklist={trackList} playlist={playList} onUpdate={updatePlayList}/>
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
