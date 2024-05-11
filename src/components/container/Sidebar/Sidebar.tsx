import React from "react";
import * as Styles from './styles'
import Button from "../../../UI/Button";
import BuyCard from "../BuyCard/BuyCard";
import Font from "../../../UI/Font";
import { Product } from "../../../interfaces/Product";
import { removeItem, addOneItem, removeOneItem } from "../../../reduces/buySlice";
import { useDispatch } from "react-redux";
import AlterButton from "../AlterButton/AlterButton";
import Flex from "../../../UI/Flex";
import Margin from "../../../UI/Margin";
import Padding from "../../../UI/Padding";


interface SidebarProps {
  elementsSelected: Product[];
  display?: boolean;
  handleSidebar?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  display,
  handleSidebar,
  elementsSelected,
}) => {
  const dispatch = useDispatch();

  const removeElement = (item: Product) => {
    dispatch(removeItem(item));
    console.log(elementsSelected);
  };

  function aumentar(item?: Product) {
    dispatch(addOneItem(item));
  }

  function diminuir(item?: Product) {
    dispatch(removeOneItem(item));
  }

  const handleClick = () => {
    alert("compra finalizada");
  };

  return (
    <Styles.SidebarContainer $display={display}>
      <Flex $direction="column" $justifycontent="space-between" $height="100%">
        <Margin $margin="20">
          <Flex $justifycontent="space-between">
            <Font width={"300"}>
              <Margin $margin="20">
                <Padding $algo="20">Carrinho de compras</Padding>
              </Margin>
        
            </Font>
            <Button onButtonClick={handleSidebar} type="close" width={35}>
              X
            </Button>
          </Flex>

          {elementsSelected &&
            elementsSelected.map((element) => (
              <BuyCard
                key={element.id}
                item={element}
                onButtonClick={removeElement}
              >
                <AlterButton
                  quantity={element.quantity}
                  increaseQuantity={aumentar}
                  decreaseQuantity={diminuir}
                  item={element}
                  text={"qtd"}
                />
              </BuyCard>
            ))}
        </Margin>

        <Font>
          <Flex $justifycontent="space-between" $width="100%">
            <Margin $margin="20">Total:</Margin>

            <Margin $margin="20">
              R${" "}
              {elementsSelected &&
                elementsSelected.reduce((sum, el) => {
                  return sum + parseInt(el.price) * el.quantity;
                }, 0)}
            </Margin>
          </Flex>
        </Font>
      </Flex>

      <Font>
        <Button onButtonClick={handleClick} type="sidebar">
          Finalizar Compra
        </Button>
      </Font>
    </Styles.SidebarContainer>
  );
};

export default Sidebar;
