import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import NoMatch from './components/NoMatch';
import CreateAccount from './pages/CreateAccount';
import Browse from './pages/Browse';
import Post from './pages/Post';
import PostOffer from './pages/Offer';
import Nav from './components/Nav';

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path='/' component={Login} />
					<Route exact path='/createaccount' component={CreateAccount} />
					<PrivateRoute exact path='/dashboard' component={Dashboard} />
					<PrivateRoute exact path='/browse' component={Browse} />
					<PrivateRoute exact path='/post' component={Post} />
					<PrivateRoute exact path='/offers/gear/:gearid' component={PostOffer} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	);
}
export default App;
