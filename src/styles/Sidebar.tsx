import React from "react";
import styled, { css } from "styled-components";
import Button from "./Button";
import BuyCard from "./BuyCard";

const SidebarContainer = styled.div<{ $display?: boolean }>`
  transition: right 0.5s ease;
  
  height:100%;
  width: 486px;
  position:fixed;
   top:0;
   right:-486px;
   
   
  
  background: #0f52ba;
  color: white;

  box-shadow: -5px 0px 6px 0px #00000021;
  display: flex;
  flex-direction: column; /* Align items in a column layout */
  justify-content:space-between; /* Align items to the end (bottom) of the container */

  ${(props) =>
    props.$display &&
  css`
     
      right:0;
    `}
`;

const SideBarButton = styled(Button)`
  font-family: Montserrat;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  text-align: left;

  width: 100%;
`;

interface SidebarProps {
  display?: boolean;
  handleSidebar?: () => void;
  onClickAlert?:() => void;
  children?: React.ReactNode;
}

const handleClick = () => {
  alert('remove element')
}

const elements = [{
  "id": 5,
  "name": "Apple Watch Series 7",
  "brand": "Apple",
  "description": "O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.",
  "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
  "price": "3200.00",
},
{
  "id": 7,
  "name": "Headset Cloud Revolver",
  "brand": "HyperX",
  "description": "A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.",
  "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
  "price": "1000.00",
      
}];

const Sidebar: React.FC<SidebarProps> = ({ display, handleSidebar,onClickAlert, children }) => {
  return (
    <SidebarContainer $display={display}>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%',margin:'20px'}}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
          <span>
            Carrinho de compras
          </span>
          <Button type='close' onClick={handleSidebar} size={30}>X</Button>
        </div>

        <div>
          {elements.map((element) => (
          <BuyCard key={element.id} item={element}>{children}</BuyCard>     
          ))}
        </div>  

        <div>Total:   {'sum of all items'}</div> 
        
      </div>
      
      <SideBarButton type="sidebar" onClick={onClickAlert}>
        Finalizar Compra
      </SideBarButton>

    </SidebarContainer>
  );
};

export default Sidebar;
