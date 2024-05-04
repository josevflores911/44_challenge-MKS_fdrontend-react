import React, { useEffect, useState } from 'react';
import MainContainer from './MainContainer';
import Card from '../styles/Card';
import { Product } from '../interfaces/Product';

import axios, { AxiosResponse } from "axios";

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../scripts/store';
import {addItem} from '../scripts/buySlice'

const API_URL = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products";


const Main = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const elementsSelected = useSelector((state: RootState) => state.product.values)
  const dispatch = useDispatch();

  const handleAddItem = (item: Product) => {
    dispatch(addItem(item))
    console.log(elementsSelected)
  };  
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response: AxiosResponse<{ products: Product[] }> = await axios.get(
          API_URL,
          {
            params: {
              page: 1,
              rows: 10,
              sortBy: "id",
              orderBy: "DESC",
            },
          }
        );

        const p: Product[] = response.data.products.map((product) => ({ ...product, quantity: 1 }));
        
        setProducts(p);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); 


  return (
    <MainContainer elementsSelected={elementsSelected}>
      {products.map((item) => (
          <Card key={item.id} item={item} onButtonClick={handleAddItem} />
      ))}
    </MainContainer>
  );
};

export default Main;