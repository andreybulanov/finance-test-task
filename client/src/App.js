import React from 'react';
import { Provider } from 'react-redux';
import Tickers from './Components/Tickers.jsx';
import store from './Store/StoreTickers';

// import logo from './logo.svg';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Tickers />
</Provider>
);


export default App;
