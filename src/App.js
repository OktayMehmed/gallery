
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvidev } from './contexts/AuthContext';
import Login from './components/Login';
import Gallery from './components/Gallery';


function App() {
  return (
    <BrowserRouter>
      <AuthProvidev>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </AuthProvidev>
    </BrowserRouter>
  );
}

export default App;
