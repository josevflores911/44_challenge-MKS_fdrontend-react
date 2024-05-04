import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { Product } from "../interfaces/Product";

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
            quantity={elementsSelected.reduce(((sum,items)=>{return (sum + items.quantity)}),0)} //
            title={title}
            subtitle={subtitle}
            onButtonClick={toggleContentVisibility}
          />
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
  background-color: yellow;
  align-content: space-between;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  padding: 50px;
`;
