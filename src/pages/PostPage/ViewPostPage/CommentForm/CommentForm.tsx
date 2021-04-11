import React from 'react';
import * as PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const CommentFormSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    body: Yup.string().required('Required'),
});

export default function CommentForm({ onSubmit }: any) {
    return (
        <div className="card my-4">
            <h5 className="card-header">Leave a Comment:</h5>
            <div className="card-body">
                <Formik initialValues={{ name: '', body: '' }} validationSchema={CommentFormSchema} onSubmit={onSubmit}>
                    {({ errors, touched }) => {
                        const isInvalidName = errors.name && touched.name;
                        const isInvalidBody = errors.body && touched.body;
                        return (
                            <Form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <Field name="name" className={`form-control ${isInvalidName && 'is-invalid'}`} />
                                    {isInvalidName && <div className="invalid-feedback">{errors.name}</div>}
                                </div>
                                <div className="form-group">
                                    <label>Content</label>
                                    <Field
                                        name="body"
                                        as="textarea"
                                        className={`form-control ${isInvalidBody && 'is-invalid'}`}
                                        rows="3"
                                    />
                                    {isInvalidBody && <div className="invalid-feedback">{errors.body}</div>}
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg btn-block submit-button">
                                    Submit
                                </button>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}

CommentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
