import './App.css';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
