import React, { useRef } from 'react';
import './App.css';
import './icon/iconfont.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Blog, Music, Login, Detail, MessageBoard, About } from './config/loadable';
import PrivateRoute from './components/PrivateRoute';
import BackTop from './base/BackTop';

const App: React.FC = () => {

  return (
    <div className="App">
      <BackTop/>
      <Router>
        <div>
          <Header/>
          <Switch>
            <PrivateRoute exact path="/" component={Home}/>
            <PrivateRoute exact path="/blog" component={Blog}/>
            <PrivateRoute exact path="/music" component={Music}/>
            <PrivateRoute exact path="/login" component={Login}/>
            <PrivateRoute exact path="/detail/:id" component={Detail}/>
            <PrivateRoute exact path="/about" component={About}/>
            {/* 留言板需要添加登录权限 */}
            <PrivateRoute exact path="/message-board" component={MessageBoard}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
