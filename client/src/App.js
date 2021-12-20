import React from 'react';
import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './pages/ProductList';
import Home from './pages/Home';
import AddReview from './pages/AddReview';
import ProductDetails from './pages/ProductDetails';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/roductList" component={ProductList} />
          <Route path="/productDetails/:id" component={GameDetails} />
          <Route path="/addreview/" component={ViewGames} />
        </Switch>
      </main>
    </div>
  );
}
