import React from 'react';
import styled, { css } from 'styled-components';
import '../index.css'
import Button from './Button';
import { RiShoppingCartFill } from "react-icons/ri";

const StyledHeader = styled.div`
    display:flex;
    justify-content:space-between;
    flex:2;
    align-items: center;
    background-color:rgb(15,82,186);
    height:81px;
   padding:15px;

`;


const StyledTitle = styled.div<{ $primary?: boolean; }>`
    color:white;
    font-family: Montserrat;
    font-size: 40px;
    font-weight: 600;

    ${props => props.$primary && css`
        font-size: 20px;
        font-weight: 300;
        text-align: left;
        margin-left:5px;
  `}
`;



interface HeaderProps {
    title?: string;
    subtitle?: string;
    onButtonClick?: () => void;
  }

const Header: React.FC<HeaderProps> = ( {title,subtitle,onButtonClick}) => {
    return (
        <StyledHeader>
            <div style={{display:'flex',alignItems:'flex-end'}}>
                <StyledTitle>{title}</StyledTitle>
                <StyledTitle $primary>{subtitle}</StyledTitle>
            </div>
            <div style={{width:'150px'}}>
            {/* onClick={onButtonClick} */}
                <Button  type='header'><RiShoppingCartFill/> {"0"}</Button>
            </div>
            
        </StyledHeader>
    );
};

export default Header;
