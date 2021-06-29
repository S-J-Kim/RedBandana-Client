import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <div></div>
      <MainLogo src={process.env.PUBLIC_URL + 'mainlogo.svg'} />
      <UserIcon src={process.env.PUBLIC_URL + 'profileicon.svg'} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px 0 49px;
  box-sizing: border-box !important;
  background-color: white;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
`;

const MainLogo = styled.img`
  width: 110px;
`;

const UserIcon = styled.img`
  width: 27px;
`;

export default Header;
