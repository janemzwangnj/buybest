import { Route, Switch } from 'react-router-dom';
import Search from '../components/Search'
import SideBar from '../components/SideBar';
import ProductList from '../pages/ProductList';
import ProductDetails from '../pages/ProductDetails';
import AddReview from '../pages/AddReview';
import AboutWalmart from './AboutWalmart';

function Walmart() {
  return (
    <div> 
      <SideBar storeName={'/walmart'}/>
      <Search />
      <main>
        <Switch>
          <Route exact path="/walmart">
            <AboutWalmart/>
          </Route>
          <Route path="/walmart/productlist">
            <ProductList storeName={'Walmart'}/>
          </Route>
          <Route path="/walmart/productdetails">
            <ProductDetails storeName={'Walmart'} />
          </Route> 
          <Route path="/walmart/addreview">
            <AddReview storeName={'Walmart'} /> 
          </Route> 
        </Switch>
      </main>
    </div>
  );
}

export default Walmart;