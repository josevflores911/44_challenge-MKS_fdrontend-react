import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { GiShoppingBag } from "react-icons/gi";

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
  top: 173px;
  left: 142px;
  gap: 0px;
  border-radius: 5px;
  opacity: 0px;
  background-color: #373737;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 700;
  line-height: 15px;
  text-align: left;
  color: #ffffff;
`;

interface CardProps {
  item: {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
  };
  onButtonClick?: () => void;
  children?: React.ReactNode;
}

function formatCurrency(amount: string): string {
  const value = parseInt(amount);
  const formattedAmount = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  });

  return formattedAmount;
}

const BuyCard: React.FC<CardProps> = ({ item, onButtonClick }) => {
  const [quantity, setQuantity] = useState(0);

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
    <div
      style={{
        display: "flex",
        backgroundColor: "white",
        alignItems: "center",
        color: "black",
        marginBottom: "10px",
        borderRadius: "10px",
        padding: "10px",
        position:'relative'
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Image src={item.photo} alt={item.description} size={50} />
        <div> { item.brand}</div>

        <div style={{ display: "flex", height: "30px" }}>
          <button type="button" onClick={diminuir}>
            -
          </button>
          <div>{quantity}</div>
          <button type="button" onClick={aumentar}>
            +
          </button>
        </div>
        <CardContent>{item.price}</CardContent>
      </div>

      <div style={{position:'absolute',top:'-15px',right:'-15px'}}>
        <Button type="close">X</Button>
      </div>
    </div>
  );
};

export default BuyCard;
