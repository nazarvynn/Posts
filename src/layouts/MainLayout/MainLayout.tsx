import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideWidget from '../../components/SideWidget/SideWidget';
import Search from '../../components/Search/Search';
import Categories from '../../components/Categories/Categories';
import './main.scss';

export default function MainLayout({ children }: { children: any }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <div className="main container">
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
            <Footer />
        </>
    );
}

MainLayout.propTypes = {
    children: PropTypes.any.isRequired,
};
