import React, { Component } from 'react';
import { Input, PostButton } from '../components/PostOffer';
import setAuthToken from '../utils/SetAuthToken';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
// import SavedGear from '../components/SavedGear';

const styles = {
	error: {
		color: 'red',
		fontSize: '0.8rem',
		margin: 0
	}
};
class PostOffer extends Component {
	state = {
		firstName: '',
		lastName: '',
		offerPrice: '',
		phoneNumber: '',
		email: '',
		avatar: '',
		gearid: '',
		date: '',
		userid: '',
		user: {},
		redirect: false,
		savedGear: [],
		errors: {}
	};

	componentDidMount() {
		const token = localStorage.getItem('example-app');
		if (token) {
			setAuthToken(token);
		}

		axios.get('/api/users').then((response) => {
			this.setState({
				user: response.data,
				userid: response.data._id,
				avatar: response.data.avatar
			});
		});

		let gearId = this.props.match.params.gearid;
		axios.get('/api/gears/' + gearId).then((response) => {
			console.log(response.data);
			this.setState({
				savedGear: response.data
			});
		});
	}

	handlePostChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	//submit button function
	handlePostRequest = (event) => {
		event.preventDefault();
		console.log('hi');

		let errors = {};

		if (!this.state.firstName) {
			errors.firstname = 'Please type in your first name';
			this.setState({ errors });
		}
		if (!this.state.lastName) {
			errors.lastname = 'Please type in your last name';
			this.setState({ errors });
		}
		if (!this.state.offerPrice) {
			errors.offerPrice = 'Please type in your offerPrice';
			this.setState({ errors });
		}
		if (!this.state.phoneNumber) {
			errors.phoneNumber = 'Please type in your phoneNumber';
			this.setState({ errors });
		}
		if (!this.state.email) {
			errors.email = 'Please type in your mail';
			this.setState({ errors });
		} else {
			const newRequest = {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				offerPrice: this.state.offerPrice,
				phoneNumber: this.state.phoneNumber,
				email: this.state.email,
				date: this.state.date,
				avatar: this.state.avatar,
				userid: this.state.userid,
				gearid: this.props.match.params.gearid
			};
			console.log(newRequest);
			// api call to post offer
			axios
				.post('/api/offers', newRequest)
				.then(
					this.setState({
						redirect: true
						//    message: alert("Your posted a request! ")
					})
				)
				.catch((err) => console.log(err));
		}
	};

	render() {
		const { errors, redirect } = this.state;

		if (redirect) {
			return <Redirect to='/dashboard' />;
		}

		return (
			<div>
				<br />
				<br />
				<br />

				<div className='ui relaxed center aligned grid'>
					<div className='ten wide column'>
						<h1>Make Offer For </h1>
						{/* <SavedGear SavedGear={this.state.savedGear} /> */}
						<form className='ui big form'>
							<div className='card'>
								<div className='card-body player'>
									<div className='article'>
										<div className='four fields'>
											<div
												className={`four wide required field ${errors.firstName
													? 'error'
													: ''}`}
											>
												<label>
													<strong>First Name</strong>
												</label>
												{errors.firstName && <div style={styles.error}>{errors.firstName}</div>}
												<Input
													value={this.state.firstName}
													onChange={this.handlePostChange}
													name='firstName'
													placeholder='First Name'
												/>
											</div>
											<div
												className={`four wide required field ${errors.lastName ? 'error' : ''}`}
											>
												<label>
													<strong>Last Name</strong>
												</label>
												{errors.lastName && <div style={styles.error}>{errors.lastName}</div>}
												<Input
													value={this.state.lastName}
													onChange={this.handlePostChange}
													name='lastName'
													placeholder='Last Name'
												/>
											</div>
											<div
												className={`three wide required field ${errors.offerPrice
													? 'error'
													: ''}`}
											>
												<label>
													<strong>offerPrice</strong>
												</label>
												{errors.offerPrice && (
													<div style={styles.error}>{errors.offerPrice}</div>
												)}
												<Input
													value={this.state.offerPrice}
													onChange={this.handlePostChange}
													name='offerPrice'
													placeholder='Offer Price'
												/>
											</div>
											<div
												className={`five wide required field ${errors.phoneNumber
													? 'error'
													: ''}`}
											>
												<label>
													<strong>Phone Number</strong>
												</label>
												{errors.phoneNumber && (
													<div style={styles.error}>{errors.phoneNumber}</div>
												)}
												<PhoneInput
													placeholder='Enter phone number'
													country='US'
													value={this.state.phoneNumber}
													onChange={(phoneNumber) => this.setState({ phoneNumber })}
												/>
											</div>
										</div>

										<br />
										<div className='three fields'>
											{/* <div className={`required field ${errors.experience ? 'error' : ''}`}>
												<label>
													<strong># of Gigs Played Downtown</strong>
												</label>
												{errors.experience && (
													<div style={styles.error}>{errors.experience}</div>
												)}
												<Experience
													value={this.state.experience}
													onChange={this.handlePostChange}
													name='experience'
													placeholder='Years of Experience'
												/>
											</div> */}
											<div className={`required field ${errors.email ? 'error' : ''}`}>
												<label>
													<strong>Email</strong>
												</label>
												{errors.email && <div style={styles.error}>{errors.email}</div>}
												<Input
													value={this.state.email}
													onChange={this.handlePostChange}
													name='email'
													placeholder='Email'
												/>
											</div>
											{/* <div className={`required field ${errors.referencenumber ? 'error' : ''}`}>
												<label>
													<strong>Reference Phone Number</strong>
												</label>
												{errors.referencenumber && (
													<div style={styles.error}>{errors.referencenumber}</div>
												)}
												<PhoneInput
													placeholder='Enter phone number'
													country='US'
													value={this.state.referencenumber}
													onChange={(referencenumber) => this.setState({ referencenumber })}
												/>
											</div>
										</div>

										<br />
										<div className='one field'>
											<div className={`required field ${errors.link ? 'error' : ''}`}>
												<label>
													<strong>Link</strong>
												</label>
												{errors.link && <div style={styles.error}>{errors.link}</div>}
												<Input
													value={this.state.link}
													onChange={this.handlePostChange}
													name='link'
													placeholder='Link for video or website'
												/>
											</div> */}
										</div>
										<PostButton handlePostRequest={this.handlePostRequest} />
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default PostOffer;
