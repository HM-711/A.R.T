import './App.css';
import Temp from './components/Temp';
import Navbar from './components/Navbar'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function App() {
  return (
    <>
      <div>
          <Navbar navcolor="dark"/>
          <Temp/>
      </div>
    </>
  );
}

export default App;
