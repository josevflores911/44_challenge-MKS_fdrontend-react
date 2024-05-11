import styled, { css } from "styled-components";


export const SmallFont = styled.span`
  font-size: 12px;
`;

export const QuantityBorder = styled.div`
border:2px solid;
border-color:transparent gray transparent gray;
padding:0 8px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  border:2px solid;
  border-radius: 8px 8px 8px 8px;
  border-color: #ff0000 #00ff00 #0000ff rgb(250,0,255);
`;

export const Button = styled.button<{ $left?: boolean; $right?: boolean; $handlenext?: () => void; $handleprevious?:()=>void }>`
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  background:white;
  border:none;

  ${props => props.$left && css`
  `}

  ${props => props.$right && css`
  `}
  `;



