import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { useAuth } from '../auth/hooks';
import PrivateRoute from '../auth/PrivateRoute';
import LoginPage from '../pages/LoginPage/LoginPage';
import Loader from '../components/Loader/Loader';
import MainLayout from '../layouts/MainLayout/MainLayout';
const PostsPage = lazy(() => import(/* webpackPrefetch: true */ '../pages/PostsPage/PostsPage'));
const CreatePostPage = lazy(() => import('../pages/PostPage/CreatePostPage/CreatePostPage'));
const UpdatePostPage = lazy(() => import('../pages/PostPage/UpdatePostPage/UpdatePostPage'));
const ViewPostPage = lazy(() => import('../pages/PostPage/ViewPostPage/ViewPostPage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage/GalleryPage'));
const UsersPage = lazy(() => import('../pages/UsersPage/UsersPage'));
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));

export default function AppRouter() {
    const auth = useAuth();
    return (
        <Router>
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => (auth?.user ? <Redirect to="/posts" /> : <Redirect to="/auth" />)}
                />
                <Route path="/auth" exact>
                    <LoginPage />
                </Route>
                {/* private routes */}
                <MainLayout>
                    <Suspense fallback={<Loader />}>
                        <PrivateRoute path="/posts" exact>
                            <PostsPage />
                        </PrivateRoute>
                        <PrivateRoute path="/posts/:id">
                            <ViewPostPage />
                        </PrivateRoute>
                        <PrivateRoute path="/add-post" exact>
                            <CreatePostPage />
                        </PrivateRoute>
                        <PrivateRoute path="/edit-post/:id">
                            <UpdatePostPage />
                        </PrivateRoute>
                        <PrivateRoute path="/gallery" exact>
                            <GalleryPage />
                        </PrivateRoute>
                        <PrivateRoute path="/users" exact>
                            <UsersPage />
                        </PrivateRoute>
                        <PrivateRoute path="/about" exact>
                            <AboutPage />
                        </PrivateRoute>
                    </Suspense>
                </MainLayout>
            </Switch>
        </Router>
    );
}
