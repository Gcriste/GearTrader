import React from 'react';

function Nav() {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark' style={{ backgroundColor: '#0087E5' }}>
			<a className='navbar-brand' href='/'>
				<h2 className='header'>Gear Trader</h2>
			</a>

			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon' />
			</button>
			<div className='collapse navbar-collapse' id='navbarNav'>
				<ul className='navbar-nav'>
					<li className='nav-item active' id='saved'>
						<a className='nav-link' href='/dashboard'>
							<span className='material-icons d-none d-md-inline'>home</span> Home
						</a>
					</li>
					<li className='nav-item active' id='browse'>
						<a className='nav-link' href='/browse'>
							<span className='material-icons'>queue_music</span>{' '}
							<span className='d-none d-md-inline'>Browse Gear</span>
						</a>
					</li>
					<li className='nav-item active' id='post'>
						<a className='nav-link' href='/post'>
							<span className='material-icons'>post_add</span>{' '}
							<span className='d-none d-md-inline'>Post Gear</span>
						</a>
					</li>
					<li className='nav-item active' id='incomingrequest'>
						<a className='nav-link' href='/incomingrequest'>
							<span className='material-icons'>local_offer</span>{' '}
							<span className='d-none d-md-inline'>Offers</span>
						</a>
					</li>
					<li className='nav-item active' id='discussionboard'>
						<a className='nav-link' href='/discussionboard'>
							<span className='material-icons'>comment</span>{' '}
							<span className='d-none d-md-inline'>Discussion</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
