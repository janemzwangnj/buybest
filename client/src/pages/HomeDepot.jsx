import { Route, Switch } from 'react-router-dom';
import Search from '../components/Search'
import SideBar from '../components/SideBar';
import ProductList from '../pages/ProductList';
import ProductDetails from '../pages/ProductDetails';
import AddReview from '../pages/AddReview';
import AboutHomeDepot from './AboutHomeDepot';

function HomeDepot() {
  return (
    <div> 
      <SideBar storeName={'/homedepot'}/>
      <Search />
      <main>
        <Switch>
          <Route exact path="/homedepot">
            <AboutHomeDepot/>
          </Route> 
          <Route path="/homedepot/productlist">
            <ProductList storeName={'HomeDepot'} />
          </Route> 
          <Route path="/homedepot/productdetails">
            <ProductDetails storeName={'HomeDepot'}/>
          </Route> 
          <Route path="/homedepot/addreview">
            <AddReview storeName={'HomeDepot'} /> 
          </Route> 
        </Switch>
      </main>
    </div>
  );
}

export default HomeDepot;