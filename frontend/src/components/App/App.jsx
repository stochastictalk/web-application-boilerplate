import NewItemCard from '../NewItemCard/NewItemCard';
import ExistingItemCards from '../ExistingItemCards/ExistingItemCards';

import './App.scss';

function App() {

  return (
    <div className="App">
      <h1>Boilerplate.</h1>
      <ul>
        <NewItemCard />
        <ExistingItemCards />
      </ul>
    </div>
  );
}

export default App;
