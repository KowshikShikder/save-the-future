import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Cover from './Component/Cover/Cover';
import DonatePackage from './Component/DonatePackage/DonatePackage';
import Footer from './Component/Footer/Footer';
import Navigation from './Component/Navigation/Navigation'
import Projects from './Component/Projects/Projects';



function App() {
  return (
    <div className="App">

    <Navigation/>
    <Cover/>
    <About/>
    <Projects/>
    <DonatePackage/>
    <Contact/>
    <Footer/>







    </div>
  );
}

export default App;
