import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Produit from "./component/Produit";
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import Product from "./component/Product";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/produit" component={Produit} />
       
        <Route exact path="/product/:id" render={(props)=>
        <Product    {...props} />
        } />  
      {/* <Produit /> */}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
