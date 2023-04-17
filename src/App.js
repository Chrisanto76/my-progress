
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Home from './pages/Home';
import Menu from  './components/Menu';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import './css/app.css';

function App() {
  const [technos, setTechnos] = useState([]);
  //exemple [{name: 'React, category: 'front', decription: 'Learn React}, {}, ........]

  function handleAddTechno(techno) {
    console.log('handleAddTechno', techno);
    setTechnos([...technos, {...techno, technoid: uuidv4()}]);
    
  }
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<TechnoAdd  handleAddTechno={handleAddTechno}/>} />
        <Route path='/list' element={<TechnoList technos={technos}/>} />
      </Routes>
    </>
  );
}

export default App;
