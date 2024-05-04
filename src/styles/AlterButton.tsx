import React from "react";
import styled from "styled-components";
import { Product } from "../interfaces/Product";
import { removeItem, addOneItem, removeOneItem } from "../scripts/buySlice";
import { useDispatch } from "react-redux";



interface AlterButtonProps{
    quantity: number;
    decreaseQuantity?:(item:Product)=>void;
  increaseQuantity?: (item:Product) => void;
  item: Product;
}



const AlterButton:React.FC<AlterButtonProps> = ({ quantity, decreaseQuantity, increaseQuantity,item }) => {
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
    <Container>
      <SmallFont>qtd</SmallFont>
      <QuantityContainer>
        <Button type="button" onClick={remove}>
          -
        </Button>
        <div>{quantity}</div>
        <Button type="button" onClick={add}>
          +
        </Button>
      </QuantityContainer>
    </Container>
  );
};

export default AlterButton;


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SmallFont = styled.span`
  font-size: 12px;
`;

const QuantityContainer = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
`;