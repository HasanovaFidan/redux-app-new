
import { useDispatch } from 'react-redux';
import './App.css';
import Added from './components/Add/Added';
import Cards from './components/Cards/Cards';

function App() {
  const dispatch=useDispatch()
  return (
    <div className="App">
      <Added/>
      <Cards/>
    </div>
  );
}

export default App;
