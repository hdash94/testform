import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FileInput from './FileInput';
import history from '../history';

class FormRequest extends React.Component {

	renderError ({error, touched}) {
    if(touched && error) {
      return (
        <div className = "invalid-feedback">
          <small>{error}</small>
        </div>
      );
    }
    if(!touched && error) {
      return (
        <div className = "invalid-feedback">
          <small>{error}</small>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta}) => {
    const clt = `form-control ${meta.error && meta.touched ? 'is-invalid' : (meta.touched && !meta.error ? 'is-valid' : '')}`;
    return(
        <div className = "mb-3">
          <label className = "form-label"><b>{label}</b></label>
          <input {...input} className = {clt} required/>
          {this.renderError(meta)}
        </div>
    );
  }

	onSubmit = formValues => {
    history.push("/form-request-success");
		console.log(formValues);
	}

	render() {
		return (
      <div className = "container-fluid">
			<form onSubmit = {this.props.handleSubmit(this.onSubmit)} className = "m-3">
				<Field name = "CompanyName" component = {this.renderInput} label = "Company Name"/>
        <Field name = "Email" component = {this.renderInput} label = "Email"/>
        <Field name = "Contact" component = {this.renderInput} label = "Contact"/>
        <Field name = "ProductType" component = {this.renderInput} label = "Product Type"/>
        <Field name = "NoOfQuestions" component = {this.renderInput} label = "Expected Number Of Questions"/>
        <Field name = "File" component = {FileInput}  type = "file"/>
        <div className = "row justify-content-evenly">
          <button className = "col-3 btn" type="submit" disabled={this.props.pristine || this.props.submitting}>
          	Submit
        	</button>
        	<button className = "col-3 btn" type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>
          	Clear Values
        	</button>
        </div>
			</form>
      </div>
		)
	}
}
const validate = formValues => {
	const errors = {};
  if(!formValues.CompanyName) {
    errors.CompanyName  = 'Invalid Input'
  }
  if(!formValues.Email) {
    errors.Email  = 'Invalid Input'
  }
  if(!formValues.Contact) {
    errors.Contact  = 'Invalid Input'
  }
  if(!formValues.ProductType) {
    errors.ProductType  = 'Invalid Input'
  }
  if(!formValues.NoOfQuestions) {
    errors.NoOfQuestions  = 'Invalid Input'
  }
  
  return errors;
};

FormRequest = reduxForm({
	form: 'creatorForm',
  validate
})(FormRequest);

export default FormRequest;