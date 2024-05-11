import React from "react";
import * as Styles from "./styles"
import Button from "../../../UI/Button";
import { formatCurrency } from "../../../utils/utils";
import { Product } from "../../../interfaces/Product";
import Flex from "../../../UI/Flex";


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
    <Styles.CardContainer>
      <Flex $alignitems="center" $justifycontent="space-between" $width="100%">
        <Styles.Image src={item.photo} alt={item.description} size={50} />
        {item.brand}
        {children}
        <Styles.CardContent>{formatCurrency(item.price)}</Styles.CardContent>
      </Flex>

      <div style={{ position: "absolute", top: "-15px", right: "-15px" }}>
        <Button type="close" onButtonClick={handleClick} width={25}>
          X
        </Button>
      </div>
    </Styles.CardContainer>
  );
};

export default BuyCard;
