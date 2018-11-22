import React from 'react';

const MadLibCreator = ({handleInputChange, handleMadLibSubmit, text}) => {
    return (
        <div className='container'>
            <div className='component'>
                <h4>MadMadMadLib</h4>
                <h6>Example:</h6>
                <p>{'There once was a <ADJECTIVE> <MYTHICAL BEAST>. Who lived in a <PLACE>...'}</p>
            </div>
            <div className='component'>
            <form>
                <textarea rows='10' value={text} onChange={e => handleInputChange(e)}/>
                <button onClick={e => {e.preventDefault(); handleMadLibSubmit()}} className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    )
};

export default MadLibCreator;