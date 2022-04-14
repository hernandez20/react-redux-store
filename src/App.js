
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from "./components/Header"
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
function App() {
  return (
    <div className="App">
     <Header/>
    
     <Router>

<Routes>

<Route path="/" element={<ProductListing/>}></Route>
<Route path="/product/:productId" exact element ={<ProductDetail/>}></Route>

<Route>404 Not Found!</Route>
</Routes>
    </Router>
    </div>
  );
}

export default App;
