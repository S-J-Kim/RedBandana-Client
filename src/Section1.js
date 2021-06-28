import React from 'react';
import styled from 'styled-components';

const Section1 = () => {
  return (
    <SectionContainer imageurl={process.env.PUBLIC_URL + 'mic-render.png'}>
      <MainQuote>
        누구나 한 번쯤
        <br />
        아티스트가 될 수 있으니까,
      </MainQuote>
      <SubQuote>
        신촌 기반 아티스트를 위한 음악 장비 공유 서비스 <br />
        누구나 가볍게 음악을 시작할 수 있도록
      </SubQuote>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  width: 100vw;
  height: 562px;
  background: linear-gradient(
      180deg,
      rgba(229, 35, 35, 0) 5.58%,
      rgba(229, 35, 35, 0.87) 76.04%
    ),
    url(${(props) => props.imageurl});
  background-size: auto;
  background-position: center bottom;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const MainQuote = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 26px;
  line-height: 38px;
  margin-left: 18px;
`;

const SubQuote = styled.h2`
  color: white;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  margin-left: 18px;
  margin-bottom: 40px;
`;

export default Section1;
