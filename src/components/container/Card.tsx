import React from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button';
import { GiShoppingBag } from "react-icons/gi";
import { Product } from '../../interfaces/Product';
import { formatCurrency } from '../../utils/utils';
import Flex from '../../UI/Flex';

interface CardProps {
  item: Product;
  size?: number;

  onButtonClick?: (item: Product) => void;
}

const Card: React.FC<CardProps> = ({ item, onButtonClick }) => {
  return (
    <CardContainer>
      <CardContentWrapper>
        <Flex $justifycontent={"center"}>
          <Image src={item.photo} alt={item.description} />
        </Flex>

        <Flex $justifycontent="space-between">
          <CardTitle>{item.name}</CardTitle>
          <CardContent>{formatCurrency(item.price)}</CardContent>
        </Flex>

        {item.brand}
      </CardContentWrapper>

      <ButtonContainer>
        <Button type="card" onButtonClick={onButtonClick} item={item}>
          <GiShoppingBag />
          {`COMPRAR`}
        </Button>
      </ButtonContainer>
    </CardContainer>
  );
};

export default Card;




const CardContainer = styled.div`
  position: relative; 
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 218px;
  min-width: 218px;
  margin: 20px;
  max-height: 285px;
  min-height: 285px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 0;
`;

const CardContent = styled.p`
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
width: 64px;
height: 26px;
border-radius: 5px;
opacity: 0px;
background-color: #373737;
font-family: Montserrat;
font-size: 10px;
font-weight: 700;
line-height: 15px;
text-align: left;
color: #FFFFFF;

`;

const CardContentWrapper = styled.div`
  padding: 0 20px 0px 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;


const Image = styled.img<{ size?: number }>`
  width:${(props) => props.size ? `${props.size}px` : '130px'};
  height: ${(props) => props.size ? `${props.size}px` : '130px'};
`;

const ButtonContainer = styled.div`
  width:218px;
  position: absolute;
  bottom: 0px; 
`;
