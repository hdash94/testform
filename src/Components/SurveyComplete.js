import React from 'react';
import { Link } from 'react-router-dom';

export default function SurveyComplete() {
	return(
	  <div className = "container-fluid">
		<div className = "row text-center m-5">
			<div className = "col">
				<h3>THANK YOU FOR YOUR VALUABLE TIME AND RESPONSE</h3>
			</div>
		</div>
		<div className = "row text-center m-5">
			<div className = "col">
      			<p>
      				Your opinions are a top priority for us so that we can listen<br />
      				to our customers and make products according to your demands<br/><br/><br/>
      				For any further information, feel free to connect with us.<br /><br /><br />
      				<b>Contact Us</b><br />
      				Phone: <a href = "tel:+91-9969-969-969">+91-9969-969-969</a><br />
      				Email: <a href="mailto:contactus@playful.com">
                        <small>contactus@playful.com</small>
                      </a>
      			</p>
      		</div>
      	</div>
            <div className = "row text-center m-2">
                  <div className = "col">
                       <Link to = "/" style = {{textDecoration: "none"}} className = "btn btn-primary">
                              GO TO HOME
                        </Link> 
                  </div>
            </div>
        </div>
	)
}