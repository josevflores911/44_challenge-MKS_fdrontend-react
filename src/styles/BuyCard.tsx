import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { GiShoppingBag } from "react-icons/gi";
import { formatCurrency } from "../utils/utils";
import { Product } from "../interfaces/Product";


interface CardProps {
  item: Product;
  onButtonClick?: (item: Product) => void;
  children?: React.ReactNode;
}


const BuyCard: React.FC<CardProps> = ({ item, onButtonClick }) => {

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick(item);
    }
  };


  const [quantity, setQuantity] = useState(1);

  const aumentar = () => {
    const actualValue = quantity;
    setQuantity(actualValue + 1);
  };
  const diminuir = () => {
    const actualValue = quantity;
    if (actualValue > 1) {
      setQuantity(actualValue - 1);
    } else if (actualValue == 0) {
      //remove
    }
  };

  return (
    <CardContainer>

      <CardWrapper >
        <Image src={item.photo} alt={item.description} size={50} />
        <div> {item.brand}</div>
        
        
        {/*create particular button*/}
        <div style={{display:'flex',flexDirection:'column'}}>
          <Smallfont>qtd</Smallfont>
          <div style={{ display: "flex", height: "30px" }}>
            <button type="button" onClick={diminuir}>
              -
            </button>
            <div>{quantity}</div>
            <button type="button" onClick={aumentar}>
              +
            </button>
          </div>
        </div>

        <CardContent>{formatCurrency(item.price)}</CardContent>
      </CardWrapper>

      <div style={{ position: "absolute", top: "-15px", right: "-15px" }}>
        <Button type="close" onButtonClick={handleClick} size={20}>
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

const CardWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
`;

const Image = styled.img<{ size?: number }>`
  width: ${(props) => (props.size ? `${props.size}px` : "130px")};
  height: ${(props) => (props.size ? `${props.size}px` : "130px")};
`;

const Smallfont = styled.span`
font-family: Montserrat;
font-size: 8px;
font-weight: 400;
line-height: 6.1px;
text-align: left;
margin-bottom:3px;

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
