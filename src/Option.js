import React from 'react';
import slugify from 'slugify';

export default function Option({
	item,
	feature,
	itemHash,
	checked,
	onUpdateFeature,
}) {
	return (
		<div className='feature__item'>
			<input
				type='radio'
				id={itemHash}
				className='feature__option'
				name={slugify(feature)}
				checked={checked}
				onChange={(e) => onUpdateFeature(feature, item)}
			/>
			<label htmlFor={itemHash} className='feature__label'>
				{item.name} {item.cost}
			</label>
		</div>
	);
}
