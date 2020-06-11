import React, { Component } from 'react';
import GearResults from '../components/GearResults';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../utils/SetAuthToken';

class Browse extends Component {
	//create state
	state = {
		gears: [],
		redirect: false,
		user: {},
		userid: ''
	};

	componentDidMount() {
		const token = localStorage.getItem('example-app');
		if (token) {
			setAuthToken(token);
		}

		axios.get('/api/users').then((response) => {
			this.setState({
				user: response.data,
				userid: response.data._id
			});
			console.log(response.data._id);

			axios
				.get('/api/gears')
				.then((res) => {
					this.setState({
						gears: res.data
					});
				})
				.catch((err) => console.log(err.response));
		});
	}

	//logs out user
	handleLogout = () => {
		localStorage.removeItem('example-app');
		this.setState({
			redirect: true
		});
	};

	render() {
		const { redirect, user } = this.state;

		if (redirect) {
			return <Redirect to='/' />;
		}

		return (
			<div className='container'>
				<div className='container'>
					<div className='row justify-content-end'>
						<div ClassName='col-md-4'>
							<button
								className='ui red horizontal animated button'
								style={{ margin: '5px' }}
								onClick={this.handleLogout}
							>
								<div className='visible content'>Logout</div>
								<div className='hidden content'>
									<i className='right arrow icon' />
								</div>
							</button>
						</div>
					</div>

					<div>
						<GearResults gears={this.state.gears} />
					</div>
				</div>
			</div>
		);
	}
}

export default Browse;
