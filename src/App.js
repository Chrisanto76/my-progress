import './css/app.css';
import Home from './pages/Home';
import Menu from './components/Menu'
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';

function App() {
  return (
    <div>
      <Menu />
      <Home />
      <TechnoAdd />
      <TechnoList /> 
    </div>
  );
}

export default App;
