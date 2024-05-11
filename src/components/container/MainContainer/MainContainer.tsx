import React, { ReactNode, useState } from "react";

import { PRODUCTS } from "../../../data/products";

import SideBar from "../Sidebar/Sidebar";
import Layout from "../Layout/Layout";
import { Product } from "../../../interfaces/Product";


//todo

//03-05: container styled, button add , funcionalidades(add to array and sum -util js-and pop with x)
//reactquery, heroku o vercel o similar -> replantear con next(dashboard terminar)

//container, cargar productos, aplicar axios, aplicar reactquery,por ultimo jest

//04-05
//jest, react-query, heroku-vercel, clean code(Margin<FLex), framer-motion

//05-05  missing
//use margin tag inside flex tag and pass props, use framer motion, pass to angular, another option to vercel, pagination, jest, move to next

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
      <div className="parent-component" style={{ display: "flex", transition: 'width 0.5s ease', width: displayContent ? "100%" : "calc(100% - 486px)" }}>
        <Layout elementsSelected={elementsSelected} toggleContentVisibility={toggleContentVisibility} title={title} subtitle={subtitle} text={text} $displayContent={displayContent}>
        {children}
      </Layout>
    </div>
  </div>     
  );
};

export default MainContainer;

