import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <div className='h-full bg-gray-100'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
