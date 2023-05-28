import React, {Fragment, useState} from 'react';

const UserInput = () => {
    const [ input, setInput ] = useState('');
    return (
        <Fragment>
            <div className="mb-3">
                <label htmlFor="userinput" className="form-label">User Input</label>
                <textarea
                    id="userinput"
                    placeholder="..."
                    rows={4}
                    cols={50}
                    className="form-control"
                    onChange={(e) => (setInput(e.target.value))}
                >
                    {input}
                </textarea>
            </div>

            <div className="mb-3">
                <button type="submit" className="form-control btn btn-primary">
                    Submit
                </button>
            </div>
        </Fragment>
    );
}

export default UserInput;
