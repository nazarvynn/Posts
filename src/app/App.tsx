import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from '../relayEnvironment';
import styled from 'styled-components';

import AppRouter from './Router';
import ErrorBoundary from './ErrorBoundary';
import ProvideAuth from '../auth/ProvideAuth';

function App() {
    return (
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Wrapper className="App">
                <ErrorBoundary>
                    <ProvideAuth>
                        <AppRouter />
                    </ProvideAuth>
                </ErrorBoundary>
            </Wrapper>
        </RelayEnvironmentProvider>
    );
}

const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
    padding: 56px 0 0;
`;

export default App;
