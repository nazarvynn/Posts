import React from 'react';
import * as PropTypes from 'prop-types';

import SideWidget from '../../components/SideWidget/SideWidget';
import Search from '../../components/Search/Search';
import Categories from '../../components/Categories/Categories';

export default function MainLayout({ children }: { children: any }) {
    return (
        <div className="container">
            <div className="row">
                <main className="col-md-8">{children}</main>
                <aside className="col-md-4">
                    <SideWidget title="Search">
                        <Search />
                    </SideWidget>
                    <SideWidget title="Categories">
                        <Categories chunkSize={3} />
                    </SideWidget>
                </aside>
            </div>
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.any.isRequired,
};
