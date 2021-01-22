import React from 'react';
import slugify from 'slugify';
import Option from '../Option';

export default function Feature({
	feature,
	onUpdateFeature,
	options,
	selected,
}) {
	const optionItems = options.map((item) => {
		const itemHash = slugify(JSON.stringify(item));
		const checked = item.name === selected[feature].name;

		return (
			<Option
				key={itemHash}
				itemHash={itemHash}
				item={item}
				feature={feature}
				checked={checked}
				onUpdateFeature={onUpdateFeature}
			/>
		);
	});

	return (
		<fieldset className='feature'>
			<legend className='feature__name'>
				<h3>{feature}</h3>
			</legend>
			{optionItems}
		</fieldset>
	);
}
