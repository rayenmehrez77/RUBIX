import { Route, Switch } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/ShopPage/ShopPage';
import CollectionsPage from './Pages/CollectionsPage/CollectionsPage';
import BlogsPage from './Pages/BlogsPage/BlogsPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import Navbar from './Components/Navbar/Navbar'; 
import GlobalStyles from "./GlobalStyles"; 
import TopHeader from "./Components/TopHeader/TopHeader";

function App() {
  return (
    <>
    <GlobalStyles />
    <TopHeader /> 
    <Navbar /> 
    <Switch>
      <Route exact path="/" component={Homepage} /> 
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/collections" component={CollectionsPage} />
      <Route exact path="/blogs" component={BlogsPage} />
      <Route exact path="/contact" component={ContactPage} />
    </Switch>
    </>
  );
}

export default App;
