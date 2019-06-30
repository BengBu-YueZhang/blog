import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import LoadingBar from './base/LoadingBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  const LoadingBarEl = useRef();
  return (
    <div className="App">
      <LoadingBar  ref={LoadingBarEl} />
      <Header/>
      <Router>
        <Switch>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
