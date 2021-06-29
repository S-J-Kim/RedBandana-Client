import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <LogoImage src={process.env.PUBLIC_URL + 'redBandanaLogo.png'} />

      <Text>
        자주 묻는 질문
        <br />
        <TextGray>
          이용약관
          <br />
          개인정보처리방안
        </TextGray>
      </Text>

      <SubContainer>
        <SubTextType>
          상호명
          <br />
          이메일
          <br />
          대표
          <br />
          연락처
        </SubTextType>

        <SubTextValue>
          Red Bandana
          <br />
          redbandana@gmail.com
          <br />
          Bandana Kim
          <br />
          02-1234-5678
        </SubTextValue>
      </SubContainer>
      <IconContainer>
        <img src={process.env.PUBLIC_URL + 'InstagramLogo.svg'} />
        <img src={process.env.PUBLIC_URL + 'KakaoTalkLogo.svg'} />
      </IconContainer>

      <CompanyText>2021 Redbandana Corp. All Rights Reserved</CompanyText>
    </Container>
  );
}

const Container = styled.div`
  background-color: #61656a;
  height: 565px;
  padding: 0px 16px;
`;
const LogoImage = styled.img`
  margin: 61px 0px 0px 0px;
  width: 206px;
  height: 14px;
  object-fit: contain;
`;

const Text = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 32px;
  color: #ffffff;
  margin: 0px;
  margin-top: 19.24px;
`;

const TextGray = styled.span`
  color: rgba(255, 255, 255, 0.6);
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 22.76px;
`;

const SubTextType = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 26px;
  color: rgba(255, 255, 255, 0.6);
`;

const SubTextValue = styled(SubTextType)`
  font-weight: normal;
  margin-left: 32.25px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 112px;
  margin-top: 56.76px;
`;

const CompanyText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 35px;
  text-align: center;
  color: #ffffff;
  margin: 10px 0px;
`;
