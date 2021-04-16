import React from 'react';
import * as PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { Post } from '../../../core/models';

const LoginFormSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    body: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
});

export default function FormPage({
    formData,
    loading,
    onSubmit,
}: {
    formData?: Post;
    loading: boolean;
    onSubmit: any;
}) {
    const initialState = formData
        ? { title: formData.title, body: formData.body, email: formData.user.email }
        : { title: '', email: '', body: '' };
    return (
        <Formik initialValues={initialState} validationSchema={LoginFormSchema} onSubmit={onSubmit}>
            {({ errors, touched }) => {
                const isInvalidTitle = errors.title && touched.title;
                const isInvalidEmail = errors.email && touched.email;
                const isInvalidBody = errors.body && touched.body;
                return (
                    <Form>
                        <div className="form-group">
                            <label>Title</label>
                            <Field name="title" className={`form-control ${isInvalidTitle && 'is-invalid'}`} />
                            {isInvalidTitle && <div className="invalid-feedback">{errors.title}</div>}
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <Field name="email" className={`form-control ${isInvalidEmail && 'is-invalid'}`} />
                            {isInvalidEmail && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="form-group">
                            <label>Content</label>
                            <Field
                                name="body"
                                as="textarea"
                                className={`form-control ${isInvalidBody && 'is-invalid'}`}
                                rows="6"
                            />
                            {isInvalidBody && <div className="invalid-feedback">{errors.body}</div>}
                        </div>
                        <button
                            type="submit"
                            className={`btn btn-primary btn-lg submit-button ${loading ? 'disabled' : ''}`}
                        >
                            Submit
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
}
FormPage.propTypes = {
    formData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        user: PropTypes.shape({
            name: PropTypes.string,
        }),
    }),
    loading: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
