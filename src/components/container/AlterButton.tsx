import React from "react";
import styled, { css } from "styled-components";
import { Product } from "../../interfaces/Product";
import Flex from "../../UI/Flex";


interface AlterButtonProps {
  quantity: number;
  decreaseQuantity?: (item?: Product) => void;
  increaseQuantity?: (item?: Product) => void;
  item?: Product;
  text?: string;
}



const AlterButton: React.FC<AlterButtonProps> = ({ quantity, decreaseQuantity, increaseQuantity, item, text }) => {

  const add = () => {
    if (increaseQuantity) {
      increaseQuantity(item);
    }
  };

  const remove = () => {
    if (decreaseQuantity) {
      decreaseQuantity(item);
    }
  };


  return (
    <Flex $direction={'column'}>
      <SmallFont>{text}</SmallFont>
      <QuantityContainer>
        <Button type="button" onClick={remove}  $left>
          -
        </Button>
        <QuantityBorder>{quantity}</QuantityBorder>
        <Button type="button" onClick={add}  $right>
          +
        </Button>
      </QuantityContainer>
    </Flex>
  );
};

export default AlterButton;


const SmallFont = styled.span`
  font-size: 12px;
`;

const QuantityBorder = styled.div`
border:2px solid;
border-color:transparent gray transparent gray;
padding:0 8px;
`;

const QuantityContainer = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  border:2px solid;
  border-radius: 8px 8px 8px 8px;
  border-color: #ff0000 #00ff00 #0000ff rgb(250,0,255);
`;

const Button = styled.button<{ $left?: boolean; $right?: boolean; $handlenext?: () => void; $handleprevious?:()=>void }>`
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  background:white;
  border:none;

  ${props => props.$left && css`
  `}

  ${props => props.$right && css`
  `}
  `;



