import './css/App.css';
import { Business } from './sections /Business';
import { Cover } from './sections /Cover';
import { Home } from './sections /Home';
import { Nav } from './sections /Nav';
import { Plans } from './sections /Plans';
import { Quality } from './sections /Quality';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Quality/>
      <Cover/>
      <Business/>
      <Plans/>
    </div>
  );
}

export default App;
