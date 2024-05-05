import React from "react";
import styled, { css } from "styled-components";

const StyledPadding = styled.div<PaddingProps>`
padding-left:${(props) => (props.left ? `${props.left}px` : "auto")};;
padding-rigth:${(props) => (props.right ? `${props.right}px` : "auto")};;
padding-top:${(props) => (props.top ? `${props.top}px` : "auto")};;
padding-down:${(props) => (props.down ? `${props.down}px` : "auto")};;
padding:${(props) => (props.padding ? `${props.padding}px` : "auto")};;

`;

interface PaddingProps {
    top?: string;
    down?: string;
    left?: string;
    right?: string;
    padding?: string;
    children: React.ReactNode;
}
  
const Padding: React.FC<PaddingProps> = ({ children,top,down,left,right,padding}) => {    
    return (
      <StyledPadding top={top} down={down} left={left} right={right} padding={padding}>
        {children}
      </StyledPadding>
    );
};
  
export default Padding;