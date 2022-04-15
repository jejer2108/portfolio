import './App.css';
import Navigation from './screens/navigationBar/NavigationBar';
import Home from './screens/Accueil/home';
import Tech from './screens/Accueil/Technologies';
import Compet from './screens/competences/Competences';
import RPC from './screens/rpc/Rpc';
import RPE from './screens/rpe/Rpe';
import VEILLE from './screens/veille/Veille';
import SECU from './screens/secu/Secu';


function App() {
  return (
    <div className="App">
      <Navigation />
      
      
      <Home/>
      <Tech/>
      <Compet/>
      <RPC/>
      <RPE/>
      <VEILLE/>
      <SECU/>

    </div>
  );
}

export default App;
