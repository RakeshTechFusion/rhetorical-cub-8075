import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
