import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { Product } from "../../interfaces/Product";
import Button from "../../UI/Button";
import { RiShoppingCartFill } from "react-icons/ri";
import AlterButton from "./AlterButton";

interface LayoutProps {
  title?: string;
  subtitle?: string;
  text: string;
  toggleContentVisibility: () => void;
  children?: React.ReactNode;
  elementsSelected: Product[];
  $displayContent: boolean;
}

const Layout: React.FC<LayoutProps> = ({ title, subtitle, children, toggleContentVisibility, text, elementsSelected,$displayContent }) => {
  
  return (
    <Container>
      <ContentWrapper>
       
        <ContentContainer>
          
          <Header title={title} subtitle={subtitle}          >
            <Button onButtonClick={toggleContentVisibility} type='header' width={150}><RiShoppingCartFill />
              {elementsSelected.reduce(((sum, items) => { return (sum + items.quantity) }), 0)}
            </Button>
        </Header>

        
            
        <Content>{children}</Content>
         
          
         
        </ContentContainer>
       
        <Footer text={text} $displayContent={$displayContent } />
      </ContentWrapper>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  background-color: white;//red
  align-content: space-between;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content:center;
  
  flex-wrap: wrap;
`;

const Content = styled.div`

  display: flex;
  align-items:center;
  flex-wrap: wrap;
  width: 100vw;
  padding: 50px;
`;
