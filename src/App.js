import logo from './logo.svg';
import './App.css';
import Contador from './componentes/Contador'
import Card from './componentes/Card'

function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
        <div className='row'>
          <div className='co-md-4'>

          <Card/>
          <Contador/>
          </div>
        </div>
    </div>
  );
}

export default App;
