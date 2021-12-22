import { Route, Switch } from 'react-router-dom';
import Search from '../components/Search'
import SideBar from '../components/SideBar';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import AddReview from './AddReview';
import AboutFakeStore from './AboutFakeStore';

function FakeStore() {
  return (
    <div className='sidebar-container'> 
      <SideBar storeName={'/fakestore'}/>
      <div>
      <Search />
      <main>
        <Switch>
          <Route exact path="/fakestore">
            <AboutFakeStore/>
          </Route>
          <Route path="/fakestore/productlist" component={ProductList} />
          <Route path="/fakestore/productdetails/:productId" component={ProductDetails} />
         {/*  <Route path="/fakestore/addreview">
            <AddReview storeName={'Fakestore'}/> 
            </Route>  */}
        </Switch>
      </main>
      </div>
    </div>
  );
}

export default FakeStore;
