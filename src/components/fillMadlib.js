import React from 'react';

const AnswerMadLib = ({handleInputChange, prompt, text, nextPrompt}) => {
    let currentPrompt = prompt.split('');
    currentPrompt.pop();
    currentPrompt.shift();

    return (
        <div className='container'>
            <div className='component'>
                <h2>Pass to a friend!</h2>
            </div>
            <form className='component'>
                <h4>{currentPrompt.join('')}</h4>
                <input onChange={e => handleInputChange(e)}/>
                <button onClick={e => {e.preventDefault(); nextPrompt()}} className="btn btn-primary">Next</button>
            </form>
        </div>
    )
};

export default AnswerMadLib;