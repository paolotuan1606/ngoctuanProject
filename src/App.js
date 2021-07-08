import logo from './logo.svg';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import { createBrowserHistory } from 'history';
import Info from './Pages/MovieInfo/Info';
import TixFAQ from './Pages/TIX/TixFAQ';
import TixPP from './Pages/TIX/TixPP';
import BookingTicket from './Pages/BookingTicket/BookingTicket';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import UserInfo from './Pages/Login/User/UserInfo';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from './redux/Actions/UserAction';
import Admin from './Pages/Login/Admin/Admin';
import HomeTemplate from './Template/HomeTemplate';
import { USER_LOGIN } from './util/setting';



export const history = createBrowserHistory();


function App() {
  const dispatch = useDispatch();
  const login = useSelector(state => state.UserReducer)
  const credentials = localStorage.getItem(USER_LOGIN);

  useEffect(() => {
    if (credentials) {
      dispatch({
        type: "CHECKING_LOGIN_SUCCESS",
        accountName: JSON.parse(credentials)
      });
    }
  }, [])
  return (
    <Router history={history}>
      <div className="App">
        <Switch>

          <Route path='/home' exact component={Home} />
          <HomeTemplate path='/booking-ticket/:id' exact component={BookingTicket} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
          <HomeTemplate path='/userinfo' exact component={UserInfo} />
          <HomeTemplate path='/info/:id' exact component={Info} />
          <HomeTemplate path='/admin' component={Admin} />
          <Route path='/' exact component={Home} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
