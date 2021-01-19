import React from 'react';

export default function Summary(props) {
	return (
		<div className='summary__option'>
			<div className='summery__option__label'>{props.feature}</div>
			<div className='summary__option__value'>{props.selectedOption}</div>
			<div className='summary__option__cost'>{props.cost}</div>
		</div>
	);
}
