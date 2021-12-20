import { Route, Switch } from 'react-router-dom';
import Search from '../components/Search'
import SideBar from '../components/SideBar';
import ProductList from '../pages/ProductList';
import ProductDetails from '../pages/ProductDetails';
import AddReview from '../pages/AddReview';

function FakerStore() {
  return (
    <div> 
      <SideBar storeName={'/fakerstore'}/>
      <Search />
      <main>
        <Switch>
          <Route exact path="/fakerstore/productlist">
             <ProductList storeName={'Fakerstore'} />
            </Route>
          <Route path="/fakerstore/productdetails">
            <ProductDetails storeName={'Fakerstore'} />
            </Route> 
          <Route path="/fakerstore/addreview">
            <AddReview storeName={'Fakerstore'}/> 
            </Route> 
        </Switch>
      </main>
    </div>
  );
}

export default FakerStore;
