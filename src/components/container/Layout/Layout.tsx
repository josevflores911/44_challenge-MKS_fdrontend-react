import React from "react";
import * as Styles from './styles'
import Header from "../Header";
import Footer from "../Footer";
import { Product } from "../../../interfaces/Product";
import Button from "../../../UI/Button";
import { RiShoppingCartFill } from "react-icons/ri";


interface LayoutProps {
  title?: string;
  subtitle?: string;
  text: string;
  toggleContentVisibility: () => void;
  children?: React.ReactNode;
  elementsSelected: Product[];
  $displayContent: boolean;
}

const Layout: React.FC<LayoutProps> = ({ title, subtitle, children, toggleContentVisibility, text, elementsSelected,$displayContent }) => {
  
  return (
    <Styles.Container>
      <Styles.ContentWrapper>
       
        <Styles.ContentContainer>
          
          <Header title={title} subtitle={subtitle}          >
            <Button onButtonClick={toggleContentVisibility} type='header' width={150}><RiShoppingCartFill />
              {elementsSelected.reduce(((sum, items) => { return (sum + items.quantity) }), 0)}
            </Button>
        </Header>

        
            
        <Styles.Content>{children}</Styles.Content>
         
          
         
        </Styles.ContentContainer>
       
        <Footer text={text} $displayContent={$displayContent } />
      </Styles.ContentWrapper>
    </Styles.Container>
  );
};

export default Layout;

