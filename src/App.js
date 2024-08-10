import './App.scss'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
