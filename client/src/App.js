import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import FakeStore from './pages/FakeStore';
import HomeDepot from './pages/HomeDepot';
import Walmart from './pages/Walmart';

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
        </Switch>
      </main>
    </div>
  );
}

export default App;
