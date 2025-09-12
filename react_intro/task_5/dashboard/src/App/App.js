import logo from "./logo.jpg"
import './App.css';
import { getFullYear,getFooterCopy} from "../Utils/utils";

function App() {
  return (
    
     <>
     <div className="App-header">
      <img src={logo} alt="logo"/>
      <h1>
      School dashboard
      </h1>
    </div>
    <div className="App-body">
      <p>Login to access the full dashboard</p>

      <div className="App-body_container">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">OK</button>
      </div>
      </div>
      <div className="App-footer" >
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
      </>
  );
}

export default App;