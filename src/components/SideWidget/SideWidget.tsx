import React from 'react';
import * as PropTypes from 'prop-types';

export default function SideWidget({ title, children }: { title: string; children: any }) {
    return (
        <section className="card my-4">
            <h5 className="card-header">{title}</h5>
            <div className="card-body">{children}</div>
        </section>
    );
}

SideWidget.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
};
