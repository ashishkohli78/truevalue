import List from './components/List';
import {
  RecoilRoot,
  } from 'recoil';
import Details from './components/Details';
import {
  BrowserRouter ,
  Switch, 
  Route,
  
} from "react-router-dom";
function App() {

  return (
    <div className="App">
      <RecoilRoot>
      <BrowserRouter>
        <Switch>
          <Route path="/details/:first_name" component={Details}></Route>
          <Route path="/" component={List}></Route>
        </Switch>
      </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
