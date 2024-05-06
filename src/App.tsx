import React from "react";
import Main from "./components/container/Main";
import {store} from "./reduces/store";
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  return (
    <div className="App" data-testid="app-component">
      <QueryClientProvider client={new QueryClient}>

      <Provider store={store}>
        <Main />
      </Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
