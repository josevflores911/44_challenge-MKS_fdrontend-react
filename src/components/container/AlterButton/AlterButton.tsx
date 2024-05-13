import React from "react";
import * as Styles from "./styles";
import { Product } from "../../../interfaces/Product";
import Flex from "../../../UI/Flex";
import Font from "../../../UI/Font";


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
      <Font size="12" height="15" weight="500">{text}</Font>
      <Styles.QuantityContainer>
        <Styles.Button type="button" onClick={remove}  $left>
          -
        </Styles.Button>
        <Styles.QuantityBorder>{quantity}</Styles.QuantityBorder>
        <Styles.Button type="button" onClick={add}  $right>
          +
        </Styles.Button>
      </Styles.QuantityContainer>
    </Flex>
  );
};

export default AlterButton;

