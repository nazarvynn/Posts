import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

export default function CommentForm({ onSubmit }: any) {
    const [comment, setComment] = useState('');

    const onSubmitHandler = (event: any) => {
        event.preventDefault();
        onSubmit(comment);
        setComment('');
    };

    const onChange = (event: any) => {
        event.preventDefault();
        setComment(event.target.value);
    };

    return (
        <div className="card my-4">
            <h5 className="card-header">Leave a Comment:</h5>
            <div className="card-body">
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <textarea className="form-control" rows={3} value={comment} onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

CommentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
