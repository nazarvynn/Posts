import React from 'react';
import * as PropTypes from 'prop-types';

import { Photo } from '../../../core/models';

export default function GalleryItem({ title, thumbnailUrl, url }: Photo) {
    return (
        <div className="col-lg-3 col-md-4 col-6">
            <div className="d-block mb-4 h-100">
                <img className="img-fluid img-thumbnail" src={thumbnailUrl} alt={title} />
            </div>
        </div>
    );
}
GalleryItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
};
