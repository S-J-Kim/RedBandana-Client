import React from 'react';
import Footer from './Footer';
import ProductsPreview from './ProductsPreview';
import HostEnroll from './HostEnroll';
import Header from './Header';
import styled from 'styled-components';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

function App() {
  return (
    <Container>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <ProductsPreview />
      <HostEnroll />
      <Footer></Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export default App;
