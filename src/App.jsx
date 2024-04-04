import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Inicio } from './Components/Inicio'
import { Admin } from './Components/Admin'
import { Login } from './Components/Login'
import { Menu } from './Components/Menu'


function App () {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Routes>
          <Route exact path="/" element={<Inicio/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
