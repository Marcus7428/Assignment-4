import Heron from './heron';
import Ambiguous from './ambiguous';
import Newton from './newton';
import Polynomial from './polynomial';
import './App.css';
import PolynomialFunction from './polynomial';

function App() {
  return (
    <div className="side-by-side">
      <div className="row">
        <Heron />
        <Ambiguous />
      </div>
      <div className="row">
        <Newton />
        <Polynomial />
      </div>
    </div>
  );
}

export default App;