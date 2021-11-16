import React, { useState } from 'react';

const Search = (props) => {

    const [searchVal, setsearchVal] = useState('')

    const inputHandler = (e) => {
        setsearchVal(e.target.value)
        props.searchVal(e.target.value)
    }

    const onAddHandler = (e) =>{
        if(e.keyCode === 13){
            props.onEnetr({name:searchVal,fav:0})
        }
    }

    return (
        <React.Fragment>
            <input
            onKeyDown = { (e)=>onAddHandler(e) } 
            value={ searchVal }
            onChange={ (e) => inputHandler(e) }
            type="text" 
            className="form-control" 
            placeholder="Search Friend..." />
        </React.Fragment>
    );
}

export default Search;
