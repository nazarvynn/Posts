import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
    it('should render login page', () => {
        render(<App />);
        const login = screen.getByText('Login');
        expect(login).toBeInTheDocument();
    });
});
