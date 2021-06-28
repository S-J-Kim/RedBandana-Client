import React from 'react';
import styled from 'styled-components';

export default function HostEnroll() {
  return (
    <Container>
      <EnrollImage src={process.env.PUBLIC_URL + 'HostEnrollImage.png'} />
      <Title>놀고 있는 음향장비가 있다면?</Title>
      <SubTitle>지금 바로 HOST 등록하고 돈 받자!</SubTitle>
      <HostEnrollButton>HOST 등록하기</HostEnrollButton>
    </Container>
  );
}
const Container = styled.div`
  height: 545px;
  width: 100vw;
  text-align: center;
`;

const EnrollImage = styled.img`
  height: 279.26px;
  width: 242.88px;
`;

const Title = styled.p`
  margin: -22.5px 0px 0px 0px;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
  color: #1a1a1a;
`;
const SubTitle = styled.p`
  margin: 2px 0px 15px 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  color: #1a1a1a;
`;

const HostEnrollButton = styled.button`
  background-color: #e52323;
  width: 164.44px;
  height: 40px;
  border-radius: 5px;

  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  border: 0;
  color: #ffffff;
`;
