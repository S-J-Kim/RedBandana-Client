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
  @media screen and (max-width: 375px) {
    width: 100vw;
    height: 60px;
    display: flex;
    position: sticky;
    justify-content: space-between;
    align-items: center;
    padding: 0 22px;
    box-sizing: border-box;
  }
`;

const MainLogo = styled.img`
  @media screen and (max-width: 375px) {
    width: 110px;
  }
`;

const UserIcon = styled.img`
  width: 13px;
`;

export default Header;
