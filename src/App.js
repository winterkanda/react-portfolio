import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import AboutMe from './screens/AboutMe';
import Portfolio from './screens/Portfolio';
import Resume from './screens/Resume';
import Contact from './screens/Contact';
import Footer from './components/Footer';


import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      <Header/>
    <div className="App">
      <Container>
        <Route path="/" exact component={AboutMe}/> 
        <Route path="/portfolio" component={Portfolio}/> 
        <Route path="/resume" component={Resume}/> 
        <Route path="/contact" component={Contact}/> 
      </Container>
    </div>
        <Footer/>
      </BrowserRouter>
    
  );
}

export default App;
