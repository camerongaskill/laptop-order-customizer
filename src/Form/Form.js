import React from 'react';
import Feature from '../Feature/Feature';
import Features from '../Features';

export default function Form(props) {
	const features = Object.keys(Features).map((feature, idx) => {
		const featureHash = feature + '-' + idx;
		// return a feature component on each loop
		return (
			<Feature
				FEATURES={Features}
				feature={feature}
				selected={props.selected}
				key={featureHash}
				updateFeature={props.updateFeature}
				USCurrencyFormat={props.USCurrencyFormat}
				idx={idx}
			/>
		);
	});

	return (
		<form className='main__form'>
			<h2>Customize your laptop</h2>
			{features}
		</form>
	);
}
