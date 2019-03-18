import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store';


import Router from './router';
import './App.css';



// Provider to use redux store in app

class App extends Component {

  
  render() {
    return (
      <React.Fragment>
        <Container >  
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                  <Router />
                </PersistGate>
            </Provider>
       </Container>  
      </React.Fragment>
     
    );
  }
}

export default App;
