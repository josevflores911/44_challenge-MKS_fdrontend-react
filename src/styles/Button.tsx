import React from "react";
import styled, { css } from "styled-components";

interface StyledButtonProps {
  $type?: string;
  $size?: number;
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.$size ? `${props.$size}px` : "auto")};
  width: ${(props) => (props.$size ? `${props.$size}px` : "100%")};
  

  &:hover {
    background-color: #0056b3;
  }

  ${(props) =>
    props.$type === "header" &&
    css`
      border-radius: 8px;
      background-color: #ffffff;
      color: black;
      font-weight: 700;
      height: 45px;
      width: 90px;
    `}

  ${(props) =>
    props.$type === "card" &&
    css`
      font-family: Montserrat;
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      text-align: left;
      border-radius: 0 0 8px 8px;
    `}

  ${(props) =>
    props.$type === "sidebar" &&
    css`
      background-color: black;
      height: 97px;
      font-family: Montserrat;
      font-size: 20px;
      font-weight: 700;
      line-height: 15px;
      text-align: left;

      &:hover {
        background-color: gray;
      }
    `}

  ${(props) =>
    props.$type === "close" &&
    css`
      border-radius: 50%;
      background-color: black;
     
      
      padding: 0;
      font-family: Montserrat;
     
      font-weight: 400;
      line-height: 15px;
      text-align: center;

      &:hover {
        background-color: gray;
      }
    `}
`;

interface ButtonProps {
  type?: string;
  size?: number;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type, size }) => {
  return (
    <StyledButton onClick={onClick} $type={type} $size={size}>
      {children}
    </StyledButton>
  );
};

export default Button;
