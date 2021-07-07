import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Login from './compnents/login';
import Header from './compnents/Header';
import Home from './compnents/Home';
import { getUserAuth } from './actions';


function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/home'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
