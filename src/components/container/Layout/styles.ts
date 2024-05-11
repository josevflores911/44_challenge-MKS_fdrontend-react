import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  background-color: white;//red
  align-content: space-between;
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content:center;
  
  flex-wrap: wrap;
`;

export const Content = styled.div`

  display: flex;
  align-items:center;
  flex-wrap: wrap;
  width: 100vw;
  padding: 50px;
`;
