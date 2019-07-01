import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import LoadingBar from './base/LoadingBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Blog, Music, Login, Detail, MessageBoard, About } from './config/loadable';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => {
  const LoadingBarEl = useRef();
  return (
    <div className="App">
      <LoadingBar ref={LoadingBarEl} />
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/music" component={Music}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/detail/:id" component={Detail}/>
            <Route exact path="/about" component={About}/>
            {/* 留言板需要添加登录权限 */}
            <Route exact path="/message-board" component={MessageBoard}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
