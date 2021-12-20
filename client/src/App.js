import logo from './logo.svg';
import './App.css';
import react from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import FakerStore from './pages/FakerStore';
import HomeDepot from './pages/HomeDepot';
import Walmart from './pages/Walmart';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <div className="box">
          <SideBar />
        </div> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/fakerstore" component={FakerStore} />
          <Route path="/homedepot" component={HomeDepot} />
          <Route path="/walmart" component={Walmart} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
