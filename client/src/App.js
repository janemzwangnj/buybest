import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import FakeStore from './pages/FakeStore';
import HomeDepot from './pages/HomeDepot';
import Walmart from './pages/Walmart';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import UpdateReview from './components/UpdateReview';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/fakestore" component={FakeStore} />
          <Route path="/homedepot" component={HomeDepot} />
          <Route path="/walmart" component={Walmart} />
          <Route path="/fakestore/productlist" component={ProductList} />
          <Route
            path="/fakestore/productdetails/:productId"
            component={ProductDetails}
          />
          <Route
            path="/fakestore/productdetails/updatereview"
            component={UpdateReview}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
