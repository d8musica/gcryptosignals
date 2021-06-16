
import Login from '../Login/index'
import NavBar from '../Navbar'
import Footer from '../Footer'
import Dashboard from '../Dashboard'
import Assets from '../Assets/index'
import Market from '../Market'
import AssetDetails from '../AssetDetails'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from "react-redux";


function App() {

  
  const user = useSelector((state)=>state.auth.userAuth);
  

  return (
    <BrowserRouter>
    
      <NavBar/>
        <Switch>
          <Route path="/" exact component={user ? Dashboard : Login}/>
          <Route path="/asset-info" exact component={Assets}/>
          <Route path="/market-movements" exact component={Market}/>
          <Route path="/details/:id" exact component={AssetDetails}/>          
        </Switch>
      <Footer/>
        
    </BrowserRouter>
    
  );
}

export default App;
