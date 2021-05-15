import React from 'react';
import { Link } from 'react-router-dom';

export default function Audience() {
	return(
		<div className = "container-fluid">
		<div className = "row text-center m-5">
			<div className = "col">
				<h3>WELCOME TO PLAYFUL'S SURVEY</h3>
			</div>
		</div>
		<div className = "row text-center m-5">
			<div className = "col">
      			<p>
      				Here we have a set of few questions that will help us in improving<br />
      				our product and client experience for better.<br />
      				Please take a couple of minutes of your precious time and help us out<br />
      				in filling up the form<br />
      				You are requested to fill out some basic information about yourself and we<br />
      				make sure that none of your information goes public or to be used for <br />
      				advertisement purposes.<br />
      				Thank You<br />
      				Team Playful
      			</p>
      		</div>
      	</div>
      	<div className = "row d-flex text-center mb-3">
      		<div className = "col">
      			<Link to = "/my-form" className = "btn btn-primary text-white" style = {{textDecoration: "none"}}>
                              TAKE THE SURVEY
                        </Link>
      		</div>
      	</div>
    </div>
	)
}