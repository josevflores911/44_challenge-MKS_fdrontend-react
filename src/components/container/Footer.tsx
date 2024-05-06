import React from "react";
import styled from "styled-components";
import "../../index.css";


const StyledFooter = styled.div<{ $displayContent: boolean }> `
transition: width 0.5s ease;
position:fixed;
bottom:0;
  display: flex;
  justify-content: center;
  align-items:center;
  background-color: #EEEEEE;
  height: 34px;
  padding: 15px;
  width: ${(props) => (props.$displayContent ?  `100%` :`calc(100% - 516px)`) };
  margin-bottom:0;
  overflow:hidden;
`;

const StyledTitle = styled.div<{ $primary?: boolean }>`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 300;
`;

interface FooterProps {
  text: string;
  $displayContent: boolean;
}

const Footer: React.FC<FooterProps> = ({ text,$displayContent }) => {

  return (
    <StyledFooter $displayContent={$displayContent}>
      <StyledTitle>{text}</StyledTitle>
    </StyledFooter>
  );
};

export default Footer;
