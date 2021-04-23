
import './App.css';
import { Component ,Fragment } from 'react';
import { Switch , Route } from 'react-router-dom';

import OrderListPage from './Components/OrderListPage/OrderListPage';
import PurchasedPage from './Components/PurchasedPage/PurchasedPage';
import PendingPage from './Components/PendingPage/PendingPage';

class App extends Component{
 render(){ 
   return(<Fragment>
            <Switch>
              <Route path="/purchased"  component={PurchasedPage}/>
              <Route path="/pending"  component={PendingPage}/>
              <Route path="/" component={OrderListPage}/>
              
            </Switch>
   </Fragment>);
 }
}

export default App;
