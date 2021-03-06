import React from 'react';
import styled from 'styled-components';

function Product({ fileName, name, type, price, minPeriod }) {
  return (
    <ProductContainer>
      <ProductBackground>
        <ProductImage src={process.env.PUBLIC_URL + fileName} />
      </ProductBackground>
      <ProductName>{name}</ProductName>
      <ProductType>{type}</ProductType>
      <ProductPrice>
        주 {price}원 &nbsp; {minPeriod}
      </ProductPrice>
    </ProductContainer>
  );
} //프리티어 때문에 가격, 최소기간 공백이 3개가 안들어감.......

export default function ProductsPreview() {
  return (
    <Container>
      <Title>인기 물품 둘러보기</Title>
      <MoreContainer>
        <MoreText>더 보기</MoreText>
        <ArrowImage src={process.env.PUBLIC_URL + 'arrow.svg'} />
      </MoreContainer>
      <ProductSetContainer>
        <Product
          fileName={'sm-58-1@3x.png'}
          name={'Shure SM58'}
          type={'MIC'}
          price={'5,000'}
          minPeriod={'2주'}
        />
        <Product
          fileName={'dynatone@3x.png'}
          name={'다이나톤 DCK-61'}
          type={'키보드'}
          price={'7,000'}
          minPeriod={'1개월'}
        />
        <Product
          fileName={'hammer@3x.png'}
          name={'M-audio Hammer 88'}
          type={'키보드'}
          price={'25,000'}
          minPeriod={'3개월'}
        />
        <Product
          fileName={'dynatone@3x.png'}
          name={'다이나톤 DCK-61'}
          type={'키보드'}
          price={'7,000'}
          minPeriod={'1개월'}
        />
      </ProductSetContainer>
    </Container>
  );
}
const Container = styled.div`
  height: 733px;
  width: 100%;
`;
const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 38px;
  text-align: center;
  margin: 0 0 7px 0;
  color: #000000;
`;

const MoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 0 21px 0;
`;

const MoreText = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
  text-align: right;
  color: #e52323;
  margin: 0px 5px 0px 0px;
  vertical-align: text-top;
`;

const ArrowImage = styled.img`
  width: 14px;
  height: 8px;
  padding-bottom: 3.1px; /*화살표 높이 맞추려고 붙였는데 수정해야함*/
`;

const ProductSetContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 10px;
`;

const ProductName = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #1a1a1a;
  margin: 0 0 4px 0;
  padding-left: 0.5px;
`;
const ProductType = styled(ProductName)`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  padding-left: 1.5px;
  margin: 0 0 2px 0;
  color: #abadae;
`;
const ProductPrice = styled(ProductName)`
  font-weight: 500;
  font-size: 13px;
  color: #777c82;
  line-height: 19px;
  padding-left: 1.5px;
  margin: 0;
`;

const ProductBackground = styled.div`
  width: 166.34px;
  height: 166.34px;
  background: #f2f2f2;
  border-radius: 2px;
  text-align: center;
  margin: 0 0 7.66px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const ProductImage = styled.img`
  max-width: 85%;
  max-height: 70%;
  overflow: visible;
`;

const ProductContainer = styled.div`
  margin: 0 10px 31px 0;
`;
