import React from 'react';
import * as PropTypes from 'prop-types';

import { Photo } from '../../../core/models';
import GalleryItem from '../GalleryItem/GalleryItem';

export default function GalleryList({ photos }: { photos: Photo[] }) {
    return (
        <>
            {photos?.length ? (
                <div className="row text-center text-lg-left">
                    {photos.map((photo) => (
                        <GalleryItem key={photo.id} {...photo} />
                    ))}
                </div>
            ) : (
                <div>No Photos</div>
            )}
        </>
    );
}
GalleryList.propTypes = {
    photos: PropTypes.array.isRequired,
};
