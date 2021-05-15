import request from '../api/request';
import history from '../history';
import { ActiveNav } from '../Components/ActiveNav';

export const createRequest = formValues => async dispatch => {
	request.post('/data', formValues);
	ActiveNav(null);
	history.push("/form-request-success");
}

export const submitSurvey = formValues => async dispatch => {
	request.post('/formdata', formValues);
	ActiveNav(null);
	history.push("/survey-complete");
}