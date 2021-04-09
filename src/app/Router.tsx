import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProvideAuth from '../auth/ProvideAuth';
import AuthComponent from '../auth/AuthComponent';
import PrivateRoute from '../auth/PrivateRoute';
import LoginPage from '../pages/LoginPage/LoginPage';
import PostsPage from '../pages/PostsPage/PostsPage';
import { CreatePostPage, UpdatePostPage, ViewPostPage } from '../pages/PostPage';
import GalleryPage from '../pages/GalleryPage/GalleryPage';
import UsersPage from '../pages/UsersPage/UsersPage';
import AboutPage from '../pages/AboutPage/AboutPage';

export default function AppRouter() {
    return (
        <ProvideAuth>
            <Router>
                <AuthComponent />
                <Switch>
                    <Route path="/auth" exact>
                        <LoginPage />
                    </Route>
                    {/* private routes */}
                    <PrivateRoute path="/posts" exact>
                        <PostsPage />
                    </PrivateRoute>
                    <PrivateRoute path="/posts/:id">
                        <ViewPostPage />
                    </PrivateRoute>
                    <PrivateRoute path="/create-post" exact>
                        <CreatePostPage />
                    </PrivateRoute>
                    <PrivateRoute path="/update-post/:id">
                        <UpdatePostPage />
                    </PrivateRoute>
                    <PrivateRoute path="/gallery" exact>
                        <GalleryPage />
                    </PrivateRoute>
                    <PrivateRoute path="/users" exact>
                        <UsersPage />
                    </PrivateRoute>
                    <PrivateRoute path="/users" exact>
                        <UsersPage />
                    </PrivateRoute>
                    <PrivateRoute path="/about" exact>
                        <AboutPage />
                    </PrivateRoute>
                </Switch>
            </Router>
        </ProvideAuth>
    );
}
