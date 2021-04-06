import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header/Header';
import Posts from '../pages/Posts/Posts';
import Footer from '../components/Footer/Footer';

function App() {
    return (
        <Wrapper className="App">
            <Header />
            <Posts />
            <Footer />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
    padding: 56px 0 0;
`;

export default App;
