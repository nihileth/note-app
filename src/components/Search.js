import React from 'react';
import { TbSearch } from 'react-icons/tb';

const Search = ({handleSearchNote}) => {
    return <div className='search'>
        <TbSearch className='search-icons' size='1.3em' />
            <input onChange={(event)=>handleSearchNote(event.target.value)} 
                type='text' 
                placeholder='Search...' />
    </div>;
};

export default Search;