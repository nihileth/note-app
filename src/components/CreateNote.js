import {useState} from 'react';

const CreateNote = ({handleCreateNote}) => {
    const [noteText, setNoteText] = useState('');
    const characterCount = 0;

    const handleChange = (event) => {
        setNoteText(event.target.value)
    };

    const handleCreateClick = () => {
        if(noteText.trim().length > 0){
            handleCreateNote(noteText);
            setNoteText('');
        }
    };

    return(<div className='note new'>
        <textarea 
            rows='4'
            cols='10'
            placeholder='Write your note here.'
            value={noteText}
            onChange={handleChange}
            >
            </textarea>
            <div className='footer'>
                <small>{characterCount + noteText.length}</small>
                <button className='add' onClick={handleCreateClick}>Add</button>
            </div>
    </div>
    );
};

export default CreateNote;