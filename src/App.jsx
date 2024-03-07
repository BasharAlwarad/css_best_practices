import './styles/base/reset.css';
import './styles/base/typography.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import GridLayout from './layouts/GridLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Import index.css
import './styles/index.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <GridLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </GridLayout>
      <Footer />
    </div>
  );
}

export default App;
