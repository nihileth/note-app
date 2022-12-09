import Note from './Note'
import CreateNote from './CreateNote';
import EditNote from './EditNote';

const List = ({notes, handleCreateNote, handleDeleteNote, handleEditNote}) => {    

    return (
        <div className='list'>
            {/* Create Note elemt */}
            <CreateNote handleCreateNote={handleCreateNote}/>
            {/* note list elemnent */}
            {notes.map((note)=> (
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                    handleEditNote={handleEditNote}
                    />
                ))}

        </div>
    );
};

export default List;