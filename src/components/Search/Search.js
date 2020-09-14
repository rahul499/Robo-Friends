import React from 'react';

const Search = ( { searchfield, searchChange } ) => {
    return (
    <div className='pa2 tc'>
     <input 
     className = "pa2 ba b--green bg-lightest-blue tc "
     type = "search" 
     placeholder = "search robots" 
     onChange = {searchChange}
     />
     </div>
    );
}

export default Search;