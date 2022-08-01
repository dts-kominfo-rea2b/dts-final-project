import './App.css';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Pages />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
