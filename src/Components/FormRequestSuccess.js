import React from 'react';
import { Link } from 'react-router-dom';

export default function FormRequestSuccess() {
	return(
		<div className = "container-fluid">
		<div className = "row text-center m-5">
			<div className = "col">
				<h3>THANK YOU FOR CHOOSING SURVEY LEGENDS</h3>
			</div>
		</div>
		<div className = "row text-center m-5">
			<div className = "col">
      			<p>
      				Our <b>"quality over quantity"</b> policy will make sure that the survey<br />
      				forms reach the targeted audience as specified by you. <br />
      				Our Team will contact you shortly.<br/><br/><br/>
      				<b>Contact Us</b><br />
      				Phone: <a href = "tel:+91-9969-969-969">+91-9969-969-969</a><br />
      				Email: <a href="mailto:contactus@surveylegends.com"><small>contactus@surveylegends.com</small></a>
      			</p>
      		</div>
      	</div>
            <div className = "row text-center mb-3">
                  <div className = "col">
                       <Link to = "/" style = {{textDecoration: "none"}} className = "btn btn-primary">
                              GO TO HOME
                        </Link> 
                  </div>
            </div>
    </div>
	)
}