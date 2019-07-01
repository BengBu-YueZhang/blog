import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import LoadingBar from './base/LoadingBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Blog, Music, Login, Detail, MessageBoard } from './config/loadable';

const App: React.FC = () => {
  const LoadingBarEl = useRef();
  return (
    <div className="App">
      <LoadingBar  ref={LoadingBarEl} />
      <Header/>
      <Router>
        <Switch>
          <Route path="/" render={props => {
            console.log(props)
            return <Home/>
          }}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
