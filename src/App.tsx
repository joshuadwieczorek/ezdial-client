import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DialPage from './pages/DialPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NoPage from './pages/NoPage';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<DialPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
