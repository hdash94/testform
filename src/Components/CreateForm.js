import React from 'react';
import FormRequest from './FormRequest';

export default function CraeteForm() {
	return(
		<div className = "container-fluid">
			<div className = "row text-center mt-5">
				<div className = "col">
					<h3>REQUEST A FORM</h3>
				</div>
			</div>
			<div className = "row mt-5">
				<div className = "col">
					<FormRequest />
				</div>
			</div>
		</div>
	)
}