import React from 'react';
import * as Styles from './styles'
import Button from '../../../UI/Button';
import { GiShoppingBag } from "react-icons/gi";
import { Product } from '../../../interfaces/Product';
import { formatCurrency } from '../../../utils/utils';
import Flex from '../../../UI/Flex';
import Font from '../../../UI/Font';
import Margin from '../../../UI/Margin';
import Padding from '../../../UI/Padding';

interface CardProps {
  item: Product;
  size?: number;

  onButtonClick?: (item: Product) => void;
}

const Card: React.FC<CardProps> = ({ item, onButtonClick }) => {
  return (
    <Styles.CardContainer>

        
      <Styles.CardContentWrapper>
        <Flex $justifycontent={"center"}>
          <Styles.Image src={item.photo} alt={item.description} />
        </Flex>

        <Flex $justifycontent="space-between">
          <Font size='18' height='25'>
            <Margin $down='0'>
            {item.name}
            </Margin>
          </Font>
          
          <Styles.CardContent>
              {formatCurrency(item.price)}
          </Styles.CardContent>
        </Flex>

        {item.brand}
      </Styles.CardContentWrapper>

      <Styles.ButtonContainer>
        <Button type="card" onButtonClick={onButtonClick} item={item}>
          <GiShoppingBag />
          {`COMPRAR`}
        </Button>
      </Styles.ButtonContainer>

    </Styles.CardContainer>
  );
};

export default Card;


