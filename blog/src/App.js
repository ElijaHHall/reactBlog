import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
      <Route path='/home' component={Home}/>
    </div>
  );
}

export default App;
