import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import Services from './components/Home/Services/Services';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Header />
       <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
       </Routes>
    </div>
  );
}

export default App;
