import React from 'react';
import Feature from '../Feature/Feature';
import Features from '../Features';

export default function Form(props) {
	const features = Object.keys(Features).map((feature, idx) => {
		const featureHash = feature + '-' + idx;
		const options = Features[feature];
		return (
			<Feature
				key={featureHash}
				feature={feature}
				selected={props.selected}
				onUpdateFeature={props.updateFeature}
				options={options}
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
