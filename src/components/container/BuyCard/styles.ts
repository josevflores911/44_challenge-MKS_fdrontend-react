import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
background-color: white;
align-items: center;
color:black;
margin-bottom: 20px;
border-radius: 10px;
padding: 10px;
position: relative;
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
