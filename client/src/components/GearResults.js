import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const GearResults = (props) => {
	let gearsSorted = props.gears.sort((a, b) => {
		return new Date(a.date) - new Date(b.date);
	});

	return (
		<div className='container'>
			<h1>All Available Gear</h1>
			<div className='row'>
				{gearsSorted.map((gear) => {
					return (
						<div className='col-md-4'>
							<div className='card'>
								{/* <li className='search-list list-group-item'> */}
								<div className='GearResults' id={gear._id} key={gear._id}>
									<div className='card-body text-center'>
										<h3>{gear.category} for Sale</h3>
										<img src={gear.avatar} />
										<h4>
											{gear.make}, {gear.model}
										</h4>
										<h4>Condition: {gear.condition}</h4>
										<h4>Asking price: ${gear.price}</h4>
										<hr />
										<p>{gear.description}</p>
										<p>
											{' '}
											Posted by: {gear.firstName} {gear.lastName}
										</p>
										<p>Email: {gear.email}</p>
										{/* <h1> Avatar{gear.avatar}</h1> */}
										{/* <h3 className='geartime'>
											Gear Date: <Moment date={gear.date} format='MMMM Do YYYY' />
										</h3> */}
									</div>
								</div>

								<br />
								<div className='buttonDiv '>
									<Link to={'/offers/gear/' + gear._id}>
										<button className='ui primary animated button' tabindex='0'>
											<div className='visible content'>Make Offer </div>
											<div className='hidden content'>
												<i className='right arrow icon' />
											</div>
										</button>
									</Link>
								</div>
								{/* </li> */}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default GearResults;
