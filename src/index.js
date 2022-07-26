import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {createStore} from 'redux';
import reducer from './components/reducer';
import "bootstrap/dist/css/bootstrap.css"
import {Provider} from 'react-redux';
import middleware from './middleware';


const store = createStore(reducer,middleware);
ReactDOM.render(
 
   <Provider store={store}> <App /> </Provider>
  ,
  document.getElementById('root')
)


