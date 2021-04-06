import React from 'react';

export default function Search() {
    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..." />
            <span className="input-group-append">
                <button className="btn btn-secondary" type="button">
                    Go!
                </button>
            </span>
        </div>
    );
}
