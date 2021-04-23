import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import App from '../../app/App';

describe('LoginPage', () => {
    it('should render login page', async () => {
        const root: any = document.createElement('div');
        document.body.appendChild(root);
        let testHistory: any;
        let testLocation: any;

        render(
            <MemoryRouter initialEntries={['/posts']}>
                <App />
                <Route
                    path="*"
                    render={({ history, location }) => {
                        testHistory = history;
                        testLocation = location;
                        return null;
                    }}
                />
            </MemoryRouter>,
            root
        );

        const login = screen.getByText('Login');
        expect(login).toBeInTheDocument();
    });
});
