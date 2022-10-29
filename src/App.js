import logo from './logo.svg';
import './App.css';
import Materia from './components/Materia';

function App() {
  return (
    <div className="App">
      <Materia emoji='😎' nombre='Cálculo diferencial' desc='Las mates estan dificiles'/>
      <Materia emoji='😍' nombre='Fundamentos de Programación' desc='Soy una descripcion xdd'/>
    </div>
  );
}

export default App;
