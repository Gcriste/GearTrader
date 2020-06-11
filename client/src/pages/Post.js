import React, { Component } from 'react';
import axios from 'axios';
import { Input, PostButton, Make, Model, Condition, Category, Year } from '../components/Post';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import setAuthToken from '../utils/SetAuthToken';

const styles = {
	error: {
		color: 'red',
		fontSize: '0.7rem',
		margin: 0
	}
};
class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEmpty: true,
			isDisabled: false,
			firstName: '',
			lastName: '',
			email: '',
			avatar: '',
			price: '',
			make: '',
			model: '',
			condition: '',
			category: '',
			description: '',
			year: '',
			date: '',
			image: '',
			savedGear: [],
			user: {},
			redirect: false,
			errors: {},
			value: moment()
		};

		this.onFileChange = this.onFileChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onFileChange(e) {
		this.setState({ image: e.target.files[0] });
	}

	onSubmit(e) {
		e.preventDefault();
		const formData = new FormData();
		formData.append('image', this.state.image);
		// axios.post('/api/images', formData, {}).then((res) => {
		// 	console.log(res);
		// });
	}

	componentDidMount() {
		const token = localStorage.getItem('example-app');
		if (token) {
			setAuthToken(token);
		}

		axios.get('/api/users').then((response) => {
			this.setState({
				user: response.data,
				userid: response.data._id,
				firstName: response.data.firstName,
				lastName: response.data.lastName,
				email: response.data.email,
				avatar: response.data.avatar
			});
			console.log(response.data._id);
		});
	}

	handlePostChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	//submit button function
	handlePostSubmit = (event) => {
		event.preventDefault();
		console.log('hi');
		let errors = {};

		if (!this.state.price) {
			errors.price = 'Please enter the price';
			this.setState({ errors });
		}
		if (!this.state.make) {
			errors.make = 'Please click on the make';
			this.setState({ errors });
		}
		if (!this.state.model) {
			errors.model = 'Please click on the model name';
			this.setState({ errors });
		}
		if (!this.state.condition) {
			errors.condition = 'Please click on the condition';
			this.setState({ errors });
		}
		if (!this.state.category) {
			errors.category = 'Please click on the category';
			this.setState({ errors });
		}

		if (!this.state.description) {
			errors.description = 'Please enter the description';
			this.setState({ errors });
		}
		if (!this.state.year) {
			errors.year = 'Please click on the year';
			this.setState({ errors });
		} else {
			const newGear = {
				price: this.state.price,
				make: this.state.make,
				model: this.state.model,
				condition: this.state.condition,
				category: this.state.category,
				date: this.state.date,
				description: this.state.description,
				year: this.state.year,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				avatar: this.state.avatar,
				userid: this.state.userid,
				image: this.state.image
			};
			// this.setState({
			// 	savedGear: newGear
			// });
			console.log(newGear);
			// api call to post gig
			axios
				.post('/api/gears', newGear)
				.then((response) => {
					this.setState({
						redirect: true
						//  message: alert("Your posted a gig! on " + this.state.date)
					});
					console.log(response.data);
				})
				.catch((err) => console.log(err));
		}
	};

	//logs out user
	handleLogout = () => {
		localStorage.removeItem('example-app');
		this.setState({
			redirect: true
		});
	};

	render() {
		const { errors, redirect, isEmpty, date, value } = this.state;

		if (redirect) {
			return <Redirect to='/dashboard' />;
		}

		return (
			<div>
				<div />

				<div className='container'>
					<div className='card'>
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
						</div>

						<div className='ui relaxed center aligned grid'>
							<div className='ten wide column'>
								<h1>Post Gear</h1>
								<form className='ui large form'>
									<div className='card'>
										<div className='card-body player'>
											<div className='article'>
												<div className='three fields'>
													<div
														className={`six wide required field ${errors.category
															? 'error'
															: ''}`}
													>
														<label>Category</label>
														{errors.category && (
															<div style={styles.error}>{errors.category}</div>
														)}
														<Category
															value={this.state.category}
															onChange={this.handlePostChange}
															name='category'
															placeholder='category Type (required)'
														/>
													</div>
													<div
														className={`six wide required field ${errors.make
															? 'error'
															: ''}`}
													>
														<label>make</label>
														{errors.make && <div style={styles.error}>{errors.make}</div>}
														<div>
															<Make
																value={this.state.make}
																onChange={this.handlePostChange}
																name='make'
																placeholder='Make (required)'
															/>
														</div>
													</div>

													<div
														className={`six wide required field ${errors.model
															? 'error'
															: ''}`}
													>
														<label>model</label>
														{errors.model && <div style={styles.error}>{errors.model}</div>}
														<div>
															<Model
																value={this.state.model}
																onChange={this.handlePostChange}
																name='model'
																placeholder='model (required)'
															/>
														</div>
													</div>
												</div>
												<div className='three fields'>
													<div
														className={`six wide required field ${errors.condition
															? 'error'
															: ''}`}
													>
														<label>condition</label>
														{errors.condition && (
															<div style={styles.error}>{errors.condition}</div>
														)}
														<div>
															<Condition
																value={this.state.condition}
																onChange={this.handlePostChange}
																name='condition'
																placeholder='condition (required)'
															/>
														</div>
													</div>

													<div
														className={`six wide required field ${errors.year
															? 'error'
															: ''}`}
													>
														<label>year</label>
														{errors.year && <div style={styles.error}>{errors.year}</div>}
														<div>
															<Year
																value={this.state.year}
																onChange={this.handlePostChange}
																name='year'
																placeholder='year (required)'
															/>
														</div>
													</div>

													<div
														className={`six wide required field ${errors.pay
															? 'error'
															: ''}`}
													>
														<label>price</label>
														{errors.price && <div style={styles.error}>{errors.price}</div>}
														<Input
															value={this.state.price}
															onChange={this.handlePostChange}
															name='price'
															placeholder='price(required)'
														/>
													</div>
												</div>
												{/* </div> */}
												<div className='field'>
													<div className='sixteen wide field'>
														<label>Description</label>
														<Input
															value={this.state.description}
															onChange={this.handlePostChange}
															name='description'
															placeholder='Description'
														/>
													</div>
												</div>
												<div className='field'>
													<div className='sixteen wide field'>
														<form onSubmit={this.onSubmit}>
															<div className='form-group'>
																<input type='file' onChange={this.onFileChange} />
															</div>
															<div className='form-group'>
																<button className='btn btn-primary' type='submit'>
																	Upload
																</button>
															</div>
														</form>
													</div>
												</div>
												<PostButton handlePostSubmit={this.handlePostSubmit} />
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Post;
