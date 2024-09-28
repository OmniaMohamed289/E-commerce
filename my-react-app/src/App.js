import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Signup from './component/Signup';
import Checkout from './component/Checkout';

import { Switch, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/checkout" component={Checkout} />

        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
