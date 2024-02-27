import './App.css';
import ColorContext from '../src/context/ColorContext'
import Enfant from '../src/components/Enfant/Enfant'



function App() {
  return (
    
    <ColorContext>
      <Enfant />
      <Enfant />
    </ColorContext>
  );
}

export default App;
