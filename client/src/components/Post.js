import React from 'react';

export function Input(props) {
	return (
		<div className='form-group'>
			<input className='form-control' {...props} />
		</div>
	);
}

export function Make(props) {
	return (
		<div className='required field'>
			<select className='ui fluid search dropdown' {...props}>
				<option value=''>Make</option>
				<option value='Fender'>Fender</option>
				<option value='Ephiphone'>Ephiphone</option>
				<option value='Gretsch'>Gretsch</option>
				<option value='Gibson'>Gibson</option>
				<option value='Taylor'>Taylor</option>
				<option value='Martin'>Martin</option>
				<option value='PRS'>PRS</option>
				<option value='Jackson'>Jackson</option>
				<option value='ESP'>ESP</option>
				<option value='Yamaha'>Yamaha</option>
			</select>
		</div>
	);
}

export function Model(props) {
	return (
		<div className='required field'>
			<select className='ui fluid search dropdown' {...props}>
				<option value=''>Model</option>
				<option value='Les Paul'>Les Paul</option>
				<option value='Stratocaster'>Stratocaster</option>
				<option value='Telecaster'>Telecaster</option>
				<option value='Mustang'>Mustang</option>
				<option value='SG'>SG</option>
				<option value='Other'>Other</option>
			</select>
		</div>
	);
}

export function Condition(props) {
	return (
		<div className='required field'>
			<select className='ui fluid search dropdown' {...props}>
				<option value=''>Condition</option>
				<option value='New'>New</option>
				<option value='Good'>Good</option>
				<option value='Poor'>Poor</option>
				<option value='Needs Repair'>Needs Repair</option>
				<option value='Other'>Other</option>
			</select>
		</div>
	);
}

export function Category(props) {
	return (
		<div className='required field'>
			<select className='ui fluid search dropdown' {...props}>
				<option value=''>Category</option>
				<option value='Guitar'>Guitar</option>
				<option value='Drums'>Drums</option>
				<option value='Bass'>Bass</option>
				<option value='Microphone'>Microphone</option>
				<option value='Keyboard/Piano'>Keyboard/Piano</option>
				<option value='Percussion'>Percussion</option>
				<option value='Horn'>Horn</option>
				<option value='String'>String</option>
				<option value='Audio'>Audio</option>
				<option value='Misc'>Misc</option>
				<option value='Other'>Other</option>
			</select>
		</div>
	);
}

export function Year(props) {
	return (
		<div className='required field'>
			<select className='ui fluid search dropdown' {...props}>
				<option value=''>Year</option>
				{/* <option value='Before 1960'>Before 1960</option> */}
				<option value='1961'>1961</option>
				<option value='1962'>1962</option>
				<option value='1963'>1963</option>
				<option value='1964'>1964</option>
				<option value='1965'>1965</option>
				<option value='1966'>1966</option>
				<option value='1967'>1967</option>
				<option value='1968'>1968</option>
				<option value='1969'>1969</option>
				<option value='1970'>1970</option>
				<option value='1971'>1971</option>
				<option value='1972'>1972</option>
				<option value='1973'>1973</option>
				<option value='1974'>1974</option>
				<option value='1975'>1975</option>
				<option value='1976'>1976</option>
				<option value='1977'>1977</option>
				<option value='1978'>1978</option>
				<option value='1979'>1979</option>
				<option value='1980'>1980</option>
				<option value='1981'>1981</option>
				<option value='1982'>1982</option>
				<option value='1983'>1983</option>
				<option value='1984'>1984</option>
				<option value='1985'>1985</option>
				<option value='1986'>1986</option>
				<option value='1987'>1987</option>
				<option value='1988'>1988</option>
				<option value='1989'>1989</option>
				<option value='1990'>1990</option>
				<option value='1991'>1991</option>
				<option value='1992'>1992</option>
				<option value='1993'>1993</option>
				<option value='1994'>1994</option>
				<option value='1995'>1995</option>
				<option value='1996'>1996</option>
				<option value='1997'>1997</option>
				<option value='1998'>1998</option>
				<option value='1999'>1999</option>
				<option value='2000'>2000</option>
				<option value='2001'>2001</option>
				<option value='2002'>2002</option>
				<option value='2003'>2003</option>
				<option value='2004'>2004</option>
				<option value='2005'>2005</option>
				<option value='2006'>2006</option>
				<option value='2007'>2007</option>
				<option value='2008'>2008</option>
				<option value='2009'>2009</option>
				<option value='2010'>2010</option>
				<option value='2011'>2011</option>
				<option value='2012'>2012</option>
				<option value='2013'>2013</option>
				<option value='2014'>2014</option>
				<option value='2015'>2015</option>
				<option value='2016'>2016</option>
				<option value='2017'>2017</option>
				<option value='2018'>2018</option>
				<option value='2019'>2019</option>
				<option value='2020'>2020</option>
			</select>
		</div>
	);
}

export function PostButton(props) {
	return (
		<button
			className='ui violet vertical animated button'
			tabindex='0'
			onClick={(event) => props.handlePostSubmit(event)}
		>
			<div className='visible content'>Post Gear</div>
			<div className='hidden content'>Submit</div>
		</button>
	);
}
