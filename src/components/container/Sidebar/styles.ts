
import styled, { css } from "styled-components";

export const SidebarContainer = styled.div<{ $display?: boolean }>`
  transition: right 0.5s ease;

  height: 100%;
  width: 486px;
  position: fixed;
  top: 0;
  right: -486px;

  background: #0f52ba;
  color: white;

  box-shadow: -5px 0px 6px 0px #00000021;
  display: flex;
  flex-direction: column; /* Align items in a column layout */
  justify-content: space-between; /* Align items to the end (bottom) of the container */

  ${(props) =>
    props.$display &&
    css`
      right: 0;
    `}
`;

export const Smallfont = styled.span`
  font-family: Montserrat;
  font-size: 8px;
  font-weight: 400;
  line-height: 6.1px;
  text-align: left;
  margin-bottom: 3px;
`;

























//dummy
const elements = [
  {
    id: 5,
    name: "Apple Watch Series 7",
    brand: "Apple",
    description:
      "O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
    price: "3200.00",
  },
  {
    id: 7,
    name: "Headset Cloud Revolver",
    brand: "HyperX",
    description:
      "A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
    price: "1000.00",
  },
];
