import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from '../relayEnvironment';
import styled from 'styled-components';

import LoginPage from '../pages/LoginPage/LoginPage';
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
                    <Switch>
                        <Route path="/" exact render={Auth} />
                        <Route path="/auth" exact component={LoginPage} />
                        <Route path="/posts" exact component={PostsPage} />
                        <Route path="/posts/:id" component={PostPage} />
                        <Route path="/gallery" exact component={GalleryPage} />
                        <Route path="/users" exact component={UsersPage} />
                        <Route path="/about" exact component={AboutPage} />
                    </Switch>
                </Wrapper>
            </Router>
        </RelayEnvironmentProvider>
    );
}

const Auth = () => {
    const isUserLoggedIn = false;

    return isUserLoggedIn ? <Redirect to="posts" /> : <Redirect to="auth" />;
};

const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
    padding: 56px 0 0;
`;

export default App;
