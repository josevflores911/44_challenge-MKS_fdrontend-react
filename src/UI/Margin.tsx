import React from "react";
import styled, { css } from "styled-components";

const StyledMargin = styled.div<MarginProps>`
margin-left:${(props) => (props.left ? `${props.left}px` : "auto")};;
margin-rigth:${(props) => (props.right ? `${props.right}px` : "auto")};;
margin-top:${(props) => (props.top ? `${props.top}px` : "auto")};;
margin-down:${(props) => (props.down ? `${props.down}px` : "auto")};;
margin:${(props) => (props.margin ? `${props.margin}px` : "auto")};;

`;

interface MarginProps {
    top?: string;
    down?: string;
    left?: string;
    right?: string;
    margin?: string;
    children: React.ReactNode;
}
  
const Margin: React.FC<MarginProps> = ({ children,top,down,left,right,margin}) => {    
    return (
      <StyledMargin top={top} down={down} left={left} right={right} margin={margin}>
        {children}
      </StyledMargin>
    );
};
  
export default Margin;