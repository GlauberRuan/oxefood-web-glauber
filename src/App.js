import logo from './logo.svg';
import './App.css';
import { Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import FormCliente from './views/cliente/FormCliente';
import Home from './views/home/Home';





function App() {
  return (
    <div className="App">
      <Home />

      <div style={{ marginTop: '6%' }}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2026 - Projeto WEB IV - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  );
}

export default App;
