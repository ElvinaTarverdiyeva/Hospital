import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';
import AboutUs from './component/aboutUs/AboutUs';
import Blog from './component/blog/Blog';
import Services from './component/services1/Services';
import Departments from './component/departments/Departments';
import Contact from './component/contact/Contact';
import './sass/style.css';

function App() {

return (
    <div className="app">
      <BrowserRouter>
    <Navbar/>
    <Route exact path="/" component={Home}></Route>
    <Route path="/AboutUs" component={AboutUs}></Route>
    <Route path="/Services" component={Services}></Route>
    <Route path="/Departments" component={Departments}></Route>
    <Route path="/Blog" component={Blog}></Route>
    <Route path="/Contact" component={Contact}></Route>
  <Footer/>
  </BrowserRouter>
    </div> 
  );
}

export default App;
