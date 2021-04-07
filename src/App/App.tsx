import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from '../relayEnvironment';
import styled from 'styled-components';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PostsPage from '../pages/PostsPage/PostsPage';
import PostPage from '../pages/PostPage/PostPage';
import GalleryPage from '../pages/GalleryPage/GalleryPage';
import UsersPage from '../pages/UsersPage/UsersPage';
import AboutPage from '../pages/AboutPage/AboutPage';

function App() {
    return (
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Router>
                <Wrapper className="App">
                    <Header />
                    <div className="main">
                        <Switch>
                            <Route path="/" exact render={() => <Redirect to="posts" />} />
                            <Route path="/posts" exact component={PostsPage} />
                            <Route path="/posts/:id" component={PostPage} />
                            <Route path="/gallery" exact component={GalleryPage} />
                            <Route path="/users" exact component={UsersPage} />
                            <Route path="/about" exact component={AboutPage} />
                        </Switch>
                    </div>
                    <Footer />
                </Wrapper>
            </Router>
        </RelayEnvironmentProvider>
    );
}

const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
    padding: 56px 0 0;
`;

export default App;
