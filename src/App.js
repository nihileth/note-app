import { useState } from "react";
import { nanoid } from "nanoid";
import List from "./components/List";
import Search from './components/Search';

const App = () => {
    const [notes, setNotes] = useState([
      {
      id: nanoid(),
      text: "Note One",
      date: "01/24/1993"
      },
  ]);

  const [searchText, setSearchText] = useState('');

  const createNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }



  return <div className='container'>
    <div className='headerText'>N O T E S</div>
    <Search handleSearchNote={setSearchText} />
    <List 
      notes={notes.filter((note)=> 
          note.text.toLowerCase().includes(searchText)
      )} 
      handleCreateNote={createNote}
      handleDeleteNote={deleteNote}
    />
  </div>
}

export default App;