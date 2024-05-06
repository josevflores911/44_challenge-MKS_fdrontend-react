import React from "react";
import styled, { css } from "styled-components";
import Button from "../../UI/Button";
import BuyCard from "./BuyCard";
import Font from "../../UI/Font";
import { Product } from "../../interfaces/Product";
import { removeItem, addOneItem, removeOneItem } from "../../reduces/buySlice";
import { useDispatch } from "react-redux";
import AlterButton from "./AlterButton";
import Flex from "../../UI/Flex";


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
    <SidebarContainer $display={display}>
      <Flex $direction="column" $justifycontent="space-between" $height="100%">
        <div style={{ margin: "20px" }}>
          <Flex $justifycontent="space-between">
            <Font width={"180"}>
              <div style={{ margin: "20px 0" }}>Carrinho de compras</div>
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
                    text={'qtd'}
                  />
                </BuyCard>
              ))}
          
        </div>

        <Font>
          <Flex $justifycontent="space-between" $width="100%">
            <div style={{margin:'20px'}}>Total:</div>
            <div style={{margin:'20px'}}>
              R${" "}
              {elementsSelected &&
                elementsSelected.reduce((sum, el) => {
                  return sum + parseInt(el.price) * el.quantity;
                }, 0)}
            </div>
          </Flex>
        </Font>
      </Flex>

      <Font>
        <Button onButtonClick={handleClick} type="sidebar">
          Finalizar Compra
        </Button>
      </Font>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div<{ $display?: boolean }>`
  transition: right 0.5s ease;

  height: 100%;
  width: 486px;
  position: fixed;
  top: 0;
  right: -486px;

  background: #0f52ba;
  color: white;

  box-shadow: -5px 0px 6px 0px #00000021;
  display: flex;
  flex-direction: column; /* Align items in a column layout */
  justify-content: space-between; /* Align items to the end (bottom) of the container */

  ${(props) =>
    props.$display &&
    css`
      right: 0;
    `}
`;

const Smallfont = styled.span`
  font-family: Montserrat;
  font-size: 8px;
  font-weight: 400;
  line-height: 6.1px;
  text-align: left;
  margin-bottom: 3px;
`;

//dummy
const elements = [
  {
    id: 5,
    name: "Apple Watch Series 7",
    brand: "Apple",
    description:
      "O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
    price: "3200.00",
  },
  {
    id: 7,
    name: "Headset Cloud Revolver",
    brand: "HyperX",
    description:
      "A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
    price: "1000.00",
  },
];
