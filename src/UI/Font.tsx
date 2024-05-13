import React from "react";
import styled, { css } from "styled-components";

const StyledFont = styled.div<FontProps>`
font-family: Montserrat;
font-size: ${(props) => (props.size ? `${props.size}px` : "auto")};
font-weight: ${(props) => (props.weight ? `${props.weight}` : "700")};
line-height: ${(props) => (props.height ? `${props.height}px` : "32.4px")};
text-align: left;
width:${(props) => (props.width ? `${props.width}px` : "auto")};

`;

interface FontProps {
    
  children: React.ReactNode;
  width?: string;
  size?: string;
  weight?: string;
  height?: string;

}
  
const Font: React.FC<FontProps> = ({ children,width,size,weight,height}) => {    
    return (
      <StyledFont width={width} size={size} weight={weight} height={height}>
        {children}
      </StyledFont>
    );
};
  
export default Font;