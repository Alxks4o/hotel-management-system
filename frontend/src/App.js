import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';


function App() {
  
  return(
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </Router>);
}

export default App;
