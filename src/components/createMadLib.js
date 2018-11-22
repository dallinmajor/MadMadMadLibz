import React from 'react';

const MadLibCreator = ({handleInputChange, handleMadLibSubmit, text}) => {
    return (
        <div className='container'>
            <div className='component'>
                <h2>Create a Mad lib!</h2>
                <br/>
                <h4>{'There once was a <adjective> <mythical beast>. Who lived in a <Place>...'}</h4>
            </div>
            <form className='component'>
                <textarea rows='10' value={text} onChange={e => handleInputChange(e)}/>
                <button onClick={e => {e.preventDefault(); handleMadLibSubmit()}} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default MadLibCreator;