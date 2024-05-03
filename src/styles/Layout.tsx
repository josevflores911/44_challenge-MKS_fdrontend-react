import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";


const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
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


interface SidebarProps {
    title?: string;
    subtitle?: string;
    text: string;
    toggleContentVisibility: () => void;
    children?: React.ReactNode;
  }


const Layout: React.FC<SidebarProps> = ({ title,subtitle,children,toggleContentVisibility,text}) => {

  return (
    <Container>
      <ContentWrapper>
        <ContentContainer>
          <Header
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