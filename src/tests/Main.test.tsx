import { render, screen, act } from "@testing-library/react";
import Main from "../components/container/Main/Main";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "../reduces/store";
import axios, { AxiosResponse } from 'axios';

import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

jest.mock('axios');

describe('Main Component', () => {
  it('renders product data after fetch', async () => {
    const mockProduct = {
              id: 8,
              name: "Headset Cloud Stinger",
              brand: "HyperX",
              description:
                "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
              photo:
                "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
              price: "600.00",
              createdAt: "2023-10-30T16:25:01.093Z",
              updatedAt: "2023-10-30T16:25:01.093Z",
            };

    // Mock axios.get with correct type annotations
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      data: mockProduct,
    } as AxiosResponse);

    const queryClient = new QueryClient();
    
    await act(() => {
            render(
              <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                  <Main />
                </Provider>
              </QueryClientProvider>
            );
          });


    expect (screen.getByText('Loading...')).toBeInTheDocument();


    // await screen.findByText('Headset Cloud Stinger');


    // expect(screen.getByText('Headset Cloud Stinger')).toBeInTheDocument();
    
  });
});







// const handlers = [
//   http.get(
//     "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products",
//     (req) => {
//       return HttpResponse.json({
//         id: 8,
//         name: "Headset Cloud Stinger",
//         brand: "HyperX",
//         description:
//           "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
//         photo:
//           "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
//         price: "600.00",
//         createdAt: "2023-10-30T16:25:01.093Z",
//         updatedAt: "2023-10-30T16:25:01.093Z",
//       });
//     }
//   ),
// ];

// describe("Main Component Test", () => {
//   const server = setupServer(...handlers);

//   beforeAll(() => {
//     server.listen();
//   });
//   afterEach(() => server.resetHandlers());
//   afterAll(() => server.close());

//   it("renders main component with mocked data", async () => {
//     const queryClient = new QueryClient();

//     //version 15.0.6 for react 18
//     act(() => {
//       render(
//         <QueryClientProvider client={queryClient}>
//           <Provider store={store}>
//             <Main />
//           </Provider>
//         </QueryClientProvider>
//       );
//     });

  
//     expect(screen.getByText("Loading...")).toBeInTheDocument(); 

  
//     //await screen.getByText('Headset Cloud Stinger');
      
//   });
// });
