import { useState } from 'react';
import MainContainer from '../MainContainer/MainContainer';
import Card from '../Card/Card';
import { Product } from '../../../interfaces/Product';
import axios, { AxiosResponse } from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reduces/store';
import {addItem} from '../../../reduces/buySlice'
import AlterButton from '../AlterButton/AlterButton';
import Flex from '../../../UI/Flex';
import { useQuery } from 'react-query';


const API_URL = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products";

const Main = () => {
  const elementsSelected = useSelector((state: RootState) => state.product.values);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1)
  
  const handleAddItem = (item: Product) => {
    dispatch(addItem(item));
    console.log(elementsSelected);
  };

  const { data: products = [], isLoading, isError, error } = useQuery<Product[]>(
    'products', // Query key (identifier for the query)
    async () => {
      const response = await axios.get(API_URL, {
        params: {
          page: 1,
          rows: 10,
          sortBy: 'id',
          orderBy: 'DESC',
        },
      });
      const productsWithQuantity: Product[] = response.data.products.map((product: Product) => ({
        ...product,
        quantity: 1,
      }));

      return productsWithQuantity;
    }
  );

  if (isLoading) {
    return <p>Loading...</p>; 
  }

  if(isError || !products) {
    return <p>Error: {/*error?.message*/}</p>; 
  }

  return (
    <MainContainer elementsSelected={elementsSelected}>
      <Flex $direction="column" $alignitems="center">
        <Flex>
          

          <AlterButton quantity={page} text={"page"} />
          
        </Flex> 

        <Flex $wrap="wrap" data-testid="list">
          {products.map((item) => (
            <Card key={item.id} item={item} onButtonClick={handleAddItem} />
          ))}
        </Flex>
      </Flex>
    </MainContainer>
  );
};

export default Main;






















































































//const API_URL = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products";
// const Main = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const elementsSelected = useSelector((state: RootState) => state.product.values)
//   const dispatch = useDispatch();
//   const[page,setPage]=useState(1)
//   const handleAddItem = (item: Product) => {
//     dispatch(addItem(item))
//     console.log(elementsSelected)
//   };  
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response: AxiosResponse<{ products: Product[] }> = await axios.get(
//           API_URL,
//           {
//             params: {
//               page: 1,//page
//               rows: 10,
//               sortBy: "id",
//               orderBy: "DESC",
//             },
//           }
//         );

//         const p: Product[] = response.data.products.map((product) => ({ ...product, quantity: 1 }));
        
//         setProducts(p);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []); 
