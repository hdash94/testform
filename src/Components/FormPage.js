import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { submitSurvey } from '../actions';
import { connect } from 'react-redux';

class FormPage extends React.Component {

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
		this.props.submitSurvey(formValues);
	}

	render() {
		return (
      <div className = "container-fluid">
			<form onSubmit = {this.props.handleSubmit(this.onSubmit)} className = "m-3">
				<Field name = "Name" component = {this.renderInput} label = "Name"/>
        <Field name = "Email" component = {this.renderInput} label = "Email"/>
        <Field name = "Contact" component = {this.renderInput} label = "Contact"/>
        <Field name = "ShortAddress" component = {this.renderInput} label = "Short Address"/>
        <Field name = "Question1" component = {this.renderInput} label = "Question 1"/>
        <Field name = "Question2" component = {this.renderInput} label = "Question 2"/>
        <Field name = "Question3" component = {this.renderInput} label = "Question 3"/>
        <Field name = "Question4" component = {this.renderInput} label = "Question 4"/>
        <Field name = "Question5" component = {this.renderInput} label = "Question 5"/>
        <Field name = "Question6" component = {this.renderInput} label = "Question 6"/>
        <Field name = "Question7" component = {this.renderInput} label = "Question 7"/>
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
  if(!formValues.Name) {
    errors.Name  = 'Invalid Input'
  }
  if(!formValues.Email) {
    errors.Email  = 'Invalid Input'
  }
  if(!formValues.Contact) {
    errors.Contact  = 'Invalid Input'
  }
  if(!formValues.ShortAddress) {
    errors.ShortAddress  = 'Invalid Input'
  }
  if(!formValues.Question1) {
    errors.Question1  = 'Invalid Input'
  }
  if(!formValues.Question2) {
    errors.Question2  = 'Invalid Input'
  }
  if(!formValues.Question3) {
    errors.Question3  = 'Invalid Input'
  }
  if(!formValues.Question4) {
    errors.Question4  = 'Invalid Input'
  }
  if(!formValues.Question5) {
    errors.Question5  = 'Invalid Input'
  }
  if(!formValues.Question6) {
    errors.Question6 = 'Invalid Input'
  }
  if(!formValues.Question7) {
    errors.Question7  = 'Invalid Input'
  }

  return errors;
};

const formWrapped = reduxForm({
	form: 'audienceForm',
  validate
})(FormPage);

export default connect(null, { submitSurvey })(formWrapped);