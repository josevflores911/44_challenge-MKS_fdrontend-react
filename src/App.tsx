import React from "react";
import Main from "./components/container/Main/Main";
import {store} from "./reduces/store";
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from "react-query";

//03-05: container styled, button add , funcionalidades(add to array and sum -util js-and pop with x)
//reactquery, heroku o vercel o similar -> replantear con next(dashboard terminar)

//container, cargar productos, aplicar axios, aplicar reactquery,por ultimo jest

//04-05
//jest, react-query, heroku-vercel, clean code(Margin<FLex), framer-motion

//05-05  missing
//use margin tag inside flex tag and pass props, use framer motion, pass to angular, another option to vercel, pagination, jest

function App() {
  return (
    <div className="App" data-testid="app-component">
      <QueryClientProvider client={new QueryClient()}>
      <Provider store={store}>
        <Main />
      </Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
