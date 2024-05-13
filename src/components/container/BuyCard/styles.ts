import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
align-items: center;

padding: 10px;

margin-bottom: 20px;

background-color: white;
border-radius: 10px;
position: relative;
color:black;
`;


export const Image = styled.img<{ size?: number }>`
  width: ${(props) => (props.size ? `${props.size}px` : "130px")};
  height: ${(props) => (props.size ? `${props.size}px` : "130px")};
`;

export const CardContent = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 26px;

  border-radius: 5px;
  opacity: 0px;


  font-family: Montserrat;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  text-align: left;
  color: black;
`;
