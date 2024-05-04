import React from "react";
import Main from "./container/Main";
import {store} from "./scripts/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App" data-testid="app-component">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
