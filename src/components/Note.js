import { TiDelete } from 'react-icons/ti'
import { TiEdit } from 'react-icons/ti'

const Note = ({id,text,date,handleDeleteNote,handleEditNote}) => {
    return <div className='note'>
        <span>{text}</span>
        <div className='footer'>
            <small>{date}</small>
            
            <TiEdit
                className='edit'
                size='1em'
                onClick={()=> handleEditNote(id)}
            />

            <TiDelete 
                className='del' 
                size='1em' 
                onClick={()=> handleDeleteNote(id)} 
            />
        </div>
    </div>;
};

export default Note;