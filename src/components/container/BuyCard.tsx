import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { formatCurrency } from "../../utils/utils";
import { Product } from "../../interfaces/Product";
import Flex from "../../UI/Flex";


interface CardProps {
  item: Product;
  onButtonClick?: (item: Product) => void;
  children?: React.ReactNode;
}


const BuyCard: React.FC<CardProps> = ({ item, onButtonClick,children }) => {

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick(item);
    }
  };

  return (
    <CardContainer>
      <Flex $alignitems="center" $justifycontent="space-between" $width="100%">
        <Image src={item.photo} alt={item.description} size={50} />
        {item.brand}
        {children}
        <CardContent>{formatCurrency(item.price)}</CardContent>
      </Flex>

      <div style={{ position: "absolute", top: "-15px", right: "-15px" }}>
        <Button type="close" onButtonClick={handleClick} width={25}>
          X
        </Button>
      </div>
    </CardContainer>
  );
};

export default BuyCard;


const CardContainer = styled.div`
display: flex;
background-color: white;
align-items: center;
color:black;
margin-bottom: 20px;
border-radius: 10px;
padding: 10px;
position: relative;
`;


const Image = styled.img<{ size?: number }>`
  width: ${(props) => (props.size ? `${props.size}px` : "130px")};
  height: ${(props) => (props.size ? `${props.size}px` : "130px")};
`;

const CardContent = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 26px;
  border-radius: 5px;
  opacity: 0px;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  text-align: left;
  color: black;
`;
