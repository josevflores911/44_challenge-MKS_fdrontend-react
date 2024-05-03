import React, { ReactNode, useState } from "react";

import { PRODUCTS } from "../data/products";

import SideBar from "../styles/Sidebar";
import Layout from "../styles/Layout";


//todo
//container, cargar productos, aplicar axios, aplicar reactquery,por ultimo jest

type ParentComponentProps = {
  children: ReactNode;
};

const MainContainer: React.FC<ParentComponentProps> = ({ children }) => {
  const title = "MKS";
  const subtitle = "Sistemas";
  const text = "MKS sistemas © Todos os direitos reservados";

  const [displayContent, setDisplayContent] = useState(true);

  const toggleContentVisibility = () => {
    setDisplayContent((prevDisplay) => !prevDisplay);
  };

  const handleClick = () => {
    alert('Sidebar!');
  };



  return (
    <div>

    
      
      {displayContent?<SideBar />:<SideBar handleSidebar={toggleContentVisibility} onClickAlert={handleClick} display> ss</SideBar>}
      
      
      <div className="parent-component" style={{ display: "flex", overflow: "hidden",height:displayContent?"100vh" :"auto" ,transition: 'width 0.5s ease',width: displayContent?"100%" :"calc(100% - 486px)"}}>
   
        <Layout toggleContentVisibility={toggleContentVisibility} title={title} subtitle={subtitle} text={text}>
          {children}
        </Layout>

      </div>
      </div>     
  );
};

export default MainContainer;

