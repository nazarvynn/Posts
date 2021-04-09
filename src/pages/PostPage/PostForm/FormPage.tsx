import React from 'react';
import * as PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginFormSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    body: Yup.string().required('Required'),
    user: Yup.string().required('Required'),
    image: Yup.string(),
});

export default function FormPage({ onSubmit }: { onSubmit: any }) {
    return (
        <Formik
            initialValues={{ title: '', user: '', image: '', body: '' }}
            validationSchema={LoginFormSchema}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => {
                const isInvalidTitle = errors.title && touched.title;
                const isInvalidUser = errors.user && touched.user;
                const isInvalidBody = errors.body && touched.body;
                return (
                    <Form>
                        <div className="form-group">
                            <label>Title</label>
                            <Field name="title" className={`form-control ${isInvalidTitle && 'is-invalid'}`} />
                            {isInvalidTitle && <div className="invalid-feedback">{errors.title}</div>}
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                            <Field name="user" className={`form-control ${isInvalidUser && 'is-invalid'}`} />
                            {isInvalidUser && <div className="invalid-feedback">{errors.user}</div>}
                        </div>
                        <div className="form-group">
                            <label>Image</label>
                            <Field name="image" className="form-control" />
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
                        <button type="submit" className="btn btn-primary btn-lg btn-block submit-button">
                            Submit
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
}
FormPage.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
