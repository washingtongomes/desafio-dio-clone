import Button from "./components/Button";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Feed } from './pages/feed'
import { Sobre } from './pages/sobre'
import { Cadastro } from './pages/cadastro'



function App() {

  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/cadastro' element={<Cadastro />} />



    
        </Routes>
    </Router>


  );

}
export default App;
