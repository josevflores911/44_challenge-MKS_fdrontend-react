import React, { ReactNode, useState } from "react";

import { PRODUCTS } from "../../data/products";

import SideBar from "./Sidebar";
import Layout from "./Layout";
import { Product } from "../../interfaces/Product";


//todo

//03-05: container styled, button add , funcionalidades(add to array and sum -util js-and pop with x)
//reactquery, heroku o vercel o similar -> replantear con next(dashboard terminar)

//container, cargar productos, aplicar axios, aplicar reactquery,por ultimo jest

//04-05
//jest, react-query, heroku, clean code(Margin<FLex), framer-motion

type ParentComponentProps = {
  children: ReactNode;
  elementsSelected:Product[]
};

const title = "MKS";
const subtitle = "Sistemas";
const text = "MKS sistemas © Todos os direitos reservados";


const MainContainer: React.FC<ParentComponentProps> = ({ children,elementsSelected }) => {

  const [displayContent, setDisplayContent] = useState(true);


  const toggleContentVisibility = () => {
    setDisplayContent((prevDisplay) => !prevDisplay);
  };

  return (
  <div>
    {displayContent?<SideBar elementsSelected={elementsSelected} handleSidebar={toggleContentVisibility}/>:<SideBar elementsSelected={elementsSelected} handleSidebar={toggleContentVisibility} display/> }
    <div className="parent-component" style={{ display: "flex", overflow: "hidden",height:"100vh" ,transition: 'width 0.5s ease',width: displayContent?"100%" :"calc(100% - 486px)"} }>      <Layout elementsSelected={elementsSelected} toggleContentVisibility={toggleContentVisibility} title={title} subtitle={subtitle} text={text}>
        {children}
      </Layout>
    </div>
  </div>     
  );
};

export default MainContainer;

