import React from 'react';
import styled from 'styled-components';

const Section2 = () => {
  return (
    <SectionContainer imageurl={process.env.PUBLIC_URL + 'DJ.png'}>
      <MainQuote>
        레드반다나를
        <br />
        선택해야하는 이유
      </MainQuote>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.875) 87.55%,
      #ffffff 100%
    ),
    url(${(props) => props.imageurl});
  width: 100%;
  height: 322px;
  background-size: cover;
`;

const MainQuote = styled.h1`
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
  text-align: center;
  margin-top: 112px;
  color: white;
  text-shadow: 0px 0px 20px rgba(141, 0, 0, 0.4);
`;

export default Section2;
