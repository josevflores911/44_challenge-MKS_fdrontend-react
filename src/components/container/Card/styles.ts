import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative; 
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 218px;
  min-width: 218px;
  margin: 20px;
  max-height: 285px;
  min-height: 285px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 0;
`;

export const CardContent = styled.p`
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
width: 64px;
height: 26px;
border-radius: 5px;
opacity: 0px;
background-color: #373737;
font-family: Montserrat;
font-size: 10px;
font-weight: 700;
line-height: 15px;
text-align: left;
color: #FFFFFF;

`;

export const CardContentWrapper = styled.div`
  padding: 0 20px 0px 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;


export const Image = styled.img<{ size?: number }>`
  width:${(props) => props.size ? `${props.size}px` : '130px'};
  height: ${(props) => props.size ? `${props.size}px` : '130px'};
`;

export const ButtonContainer = styled.div`
  width:218px;
  position: absolute;
  bottom: 0px; 
`;

