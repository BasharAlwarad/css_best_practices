import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GridLayout from './layouts/GridLayout';

// Import index.css
import './styles/index.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <GridLayout>
        <Home />
        <About />
        <Contact />
      </GridLayout>
    </div>
  );
}

export default App;
