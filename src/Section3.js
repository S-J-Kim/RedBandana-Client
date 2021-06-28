import React from 'react';
import styled from 'styled-components';

const Section3 = () => {
  return (
    <SectionContainer>
      <DesciptionBlock>
        <img src={process.env.PUBLIC_URL + 'handshake.svg'} alt="신뢰감" />
        <MainQuote>#신뢰감</MainQuote>
        <SubQuote>
          호스트와 유저 모두에게 공유 전후 사진과
          <br />
          장비 상태를 확인시켜드려요
        </SubQuote>
      </DesciptionBlock>
      <DesciptionBlock>
        <img src={process.env.PUBLIC_URL + 'pointing.svg'} alt="편리함" />
        <MainQuote>#편리함</MainQuote>
        <SubQuote>
          직거라해러 멀리 가지 마시고 가까운 역에서
          <br />
          레드반다나를 찾아주세요
        </SubQuote>
        <MoreLink>
          더 알아보기
          <img src={process.env.PUBLIC_URL + 'arrow.svg'} />
        </MoreLink>
      </DesciptionBlock>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 112px;
`;

const DesciptionBlock = styled.div`
  width: 100%;
  height: auto;
  margin-top: 94px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainQuote = styled.h1`
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  color: #1d1d1d;
`;

const SubQuote = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  /* or 160% */
  text-align: center;
  color: #1d1d1d;
`;

const MoreLink = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  /* or 183% */
  text-align: center;
  color: #e52323;
  text-decoration: none;
  margin-top: 15px;

  &:active {
    text-decoration: none;
  }
`;

export default Section3;
