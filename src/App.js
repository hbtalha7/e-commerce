import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import './index.css';
import Cartscreen from './screens/Cartscreen';
import Homescreen from './screens/Homescreen';
import Productscreen from './screens/Productscreen';

function App() {
  return (
    <BrowserRouter>
      <header><Navbar></Navbar></header>
      <main>
        <Switch>
          <Route path="/cart/:id?" component={Cartscreen}></Route>
          <Route path="/product/:id" component={Productscreen}></Route>
          <Route path="/" component={Homescreen}></Route>
        </Switch>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
