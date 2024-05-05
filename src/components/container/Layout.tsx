import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { Product } from "../../interfaces/Product";
import Button from "../../UI/Button";
import { RiShoppingCartFill } from "react-icons/ri";

interface LayoutProps {
  title?: string;
  subtitle?: string;
  text: string;
  toggleContentVisibility: () => void;
  children?: React.ReactNode;
  elementsSelected: Product[];
}

const Layout: React.FC<LayoutProps> = ({ title, subtitle, children, toggleContentVisibility, text, elementsSelected, }) => {
  
  return (
    <Container>
      <ContentWrapper>
       
        <ContentContainer>
          
          <Header
            title={title}
            subtitle={subtitle}
          >
            <Button onButtonClick={toggleContentVisibility} type='header' width={150}><RiShoppingCartFill />
              {elementsSelected.reduce(((sum, items) => { return (sum + items.quantity) }), 0)}
            </Button>
        </Header>

          <Content>{children}</Content>
        </ContentContainer>
       
        <Footer text={text} />
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
  background-color: white;
  align-content: space-between;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
`;

const Content = styled.div`
background-color:yellow;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  padding: 50px;
`;
