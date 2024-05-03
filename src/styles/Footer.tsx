import React from "react";
import styled from "styled-components";
import "../index.css";


const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  background-color: #EEEEEE;
  height: 34px;
  padding: 15px;
  width:100%;
  margin-bottom:0;
  flex
`;

const StyledTitle = styled.div<{ $primary?: boolean }>`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 300;
`;

interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <StyledFooter>
      <StyledTitle>{text}</StyledTitle>
    </StyledFooter>
  );
};

export default Footer;
