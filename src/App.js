import React from 'react';
import PokedexContainer from './components/PokedexContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';


import './App.css';

const store = createStore(reducers);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PokedexContainer />
      </Provider>
    </div>
  );
}

export default App;
