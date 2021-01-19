import React from 'react';
import Summary from '../Summary/Summary';
import Total from '../Total/Total';

export default function Cart(props) {
	const summary = Object.keys(props.selected).map((feature, idx) => {
		const featureHash = feature + '-' + idx;
		const selectedOption = props.selected[feature];

		return (
			<Summary
				key={featureHash}
				feature={feature}
				selectedOption={selectedOption.name}
				cost={props.USCurrencyFormat.format(selectedOption.cost)}
			/>
		);
	});

	return (
		<section className='main__summary'>
			<h2>Your cart</h2>
			{summary}
			<Total cost={props.USCurrencyFormat.format(props.total)} />
		</section>
	);
}
