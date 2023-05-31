import { useState } from 'react'
import './App.css'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio'
import Login from './components/Login'
import Registro from './components/Registro'
import Headinicio from './components/Headinicio'
function App() {

  return (
    <Router>
      <div className="container">
        <Headinicio/>
        <Routes>
          <Route path='/' element={<Inicio/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='registro' element={<Registro/>}></Route>
        </Routes>
      </div>
    </Router>
  )
};

export default App;
