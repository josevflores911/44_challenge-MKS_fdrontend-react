import React from "react";
import styled, { css } from "styled-components";

const StyledFont = styled.div<FontProps>`
display:flex;

font-family: Montserrat;
font-size: 27px;
font-weight: 700;
line-height: 32.91px;
text-align: left;
width:${(props) => (props.width ? `${props.width}px` : "auto")};

`;

interface FontProps {
    width?: string;
        children: React.ReactNode;
}
  
const Font: React.FC<FontProps> = ({ children,width}) => {    
    return (
      <StyledFont width={width}>
        {children}
      </StyledFont>
    );
};
  
export default Font;