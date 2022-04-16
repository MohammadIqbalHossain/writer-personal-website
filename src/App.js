import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
       <Routes>
          <Route path='/' element={<Home />}></Route>
       </Routes>
    </div>
  );
}

export default App;
