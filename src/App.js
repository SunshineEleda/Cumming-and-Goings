import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card'
import RightRail from './components/RightRail/RightRail'

function App() {
  return (
    <div className="App">
{/* <Card title='Vaccines' withborder link='wwww.google.com' name='vaccines' /> */}
<RightRail deckJson={[{headline: 'test'}, {headline: 'test'}, {headline: 'test'},]}/>
    </div>
  );
}

export default App;
