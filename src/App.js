import {Route, Switch, Redirect} from 'react-router-dom';
import Welcome from './Pages/welcome';
import Products from './Pages/Products';
import MainHeader from './Components/MainHeader';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/welcome'></Redirect>
        </Route>
      <Route path='/welcome'><Welcome></Welcome></Route>
      <Route path='/products' exact><Products></Products></Route>
      <Route path='/products/:productId'><ProductDetail></ProductDetail></Route>
      </Switch>
    </div>
  );
}

export default App;
