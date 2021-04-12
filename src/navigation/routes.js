import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  withRouter,
  Redirect,
  // Redirect,
} from "react-router-dom";
import Home from "../screens/Home";
import Account from "../screens/Account";
import Login from "../screens/Login";
import MovieView from "../screens/MovieView";
import Register from "../screens/Register";
import Page404 from "../screens/404";
import { connect } from "react-redux";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { bindActionCreators } from "redux";
import { getMovies } from '../redux/actions/movieAction'

const ScrollToTop = () => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history.location.pathname]);

  return null;
};


const logout = async () => {
  // const data = await logoutUser();
  // if(data){window.location.href = "/login";}
};

const ResetScroll = withRouter(ScrollToTop);

const Routes = ({ user, getMovies }) => {
  getMovies();
  
  return (
    <Router>
      <ResetScroll />
      <Nav />
      <Switch>
        {/* <Route exact path="/">
          <Redirect to={`/home`} />
        </Route> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/movie/:id" component={MovieView} />
        <Route exact path="/Account" component={Account} />
        <Route path="*" component={Page404} />
      </Switch>
      <Footer />
    </Router>
  );
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getMovies}, dispatch)
}

export default connect(null, mapDispatchToProps)(Routes);
