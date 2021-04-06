import React from 'react';
import Logo from './Logo/Logo';
import MainNavigation from './MainNavigation/MainNavigation';

export default function Header() {
    return (
        <header className="app-header fixed-top">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <Logo />
                    <MainNavigation />
                </div>
            </nav>
        </header>
    );
}
