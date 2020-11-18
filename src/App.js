import './App.css';
import RightRail from './components/RightRail/RightRail'

function App() {
  return (
    <div className="App">
      <RightRail deckJson={[{headline: 'test'}]}/>
    </div>
  );
}

export default App;
