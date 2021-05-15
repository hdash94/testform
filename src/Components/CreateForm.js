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
			<div className = "row text-center mt-5 mb-3">
				<div className = "col">
					<small>
						*Pricing is subject to audience reach and medium of reach<br />
						(i.e., through personalized emails, ads, etc.)<br/>
						*Our business associate will contact you as soon as you<br />
						fill-up the above details and submit the above form.
					</small>
				</div>
			</div>
		</div>
	)
}