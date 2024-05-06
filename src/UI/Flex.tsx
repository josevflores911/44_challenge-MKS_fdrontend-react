import React from "react";
import styled, { css } from "styled-components";

const StyledFlex = styled.div<FlexProps>`
display:flex;
flex-direction:${(props)=>props.$direction};
justify-content:${(props) => props.$justifycontent};
align-items:${(props) => props.$alignitems};
height:${(props) => props.$height};
width:${(props) => props.$width };
flex-wrap:${(props) => props.$wrap };
`;

interface FlexProps {
  $direction?: string;
  $justifycontent?: string;
  $alignitems?: string;
  $height?: string;
  $width?: string;
  $wrap?: string;
  children: React.ReactNode;
}
  
const Flex: React.FC<FlexProps> = ({ children, $direction, $justifycontent, $alignitems,$height, $width , $wrap}) => {   

  return (
    <StyledFlex $direction={$direction} $justifycontent={$justifycontent} $alignitems={$alignitems} $height={$height} $width={$width} $wrap={$wrap}>
        {children}
      </StyledFlex>
    );
};
  
export default Flex;