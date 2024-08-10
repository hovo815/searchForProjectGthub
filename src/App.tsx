import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Home from './pages/home/home';
import '../src/global/global.module.css'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
};

export default App;


