import React, {useEffect} from 'react';
import store from './src/redux/store/Store';
import {Provider} from 'react-redux';
import ControlStack from './src/navigator/ControlStack';
import Login from './src/screen/Auth/LoginScreen'

const App = () => {
  return (
      <Provider store={store}>
        <ControlStack />
      </Provider>
    // <Login/>
  );
};

export default App;
