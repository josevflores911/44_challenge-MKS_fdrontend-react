import React, { useEffect, useState } from 'react';
import MainContainer from './MainContainer';
import Button from '../styles/Button';
import Card from '../styles/Card';
import { PRODUCTS } from '../data/products';
import axios, { AxiosResponse } from "axios";
import { Product } from '../interfaces/Product';





const Main = () => {

  const handleClick = (item: Product) => {
    
    const isSelected = selectedItems.some((selectedItem) => selectedItem.id === item.id);

    if (!isSelected) {
      
      setSelectedItems([...selectedItems, item]);
      console.log(selectedItems);
    }
  };


  const [products, setProducts] = useState<Product[]>([]);
  const API_URL = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products";
  const [selectedItems, setSelectedItems] = useState<Product[]>([]);
  
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
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); 


  return (
    <MainContainer>
      {products.map((item) => (
          <Card key={item.id} item={item} onButtonClick={handleClick} />
      ))}
    </MainContainer>
  );
};

export default Main;