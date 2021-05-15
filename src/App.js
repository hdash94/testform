import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import FormRequestSuccess from './Components/FormRequestSuccess';
import Audience from './Components/Audience';
import FormPage from './Components/FormPage';
import SurveyComplete from './Components/SurveyComplete';
import CreateForm from './Components/CreateForm';
import Homepage from './Components/Homepage';
import history from './history';

function App() {
  return (
    <div className = "d-flex flex-column vh-100">
        <Router history = {history}>
         <header>
                <Navbar />   
            </header>
            <main className = "d-flex flex-grow-1">
                <Switch>
                    <Route exact path = "/" component = {Homepage} />
                    <Route exact path = "/form-request-success" component = {FormRequestSuccess} />
                    <Route exact path = "/audience" component = {Audience} />
                    <Route exact path = "/my-form" component = {FormPage} />
                    <Route exact path = "/survey-complete" component = {SurveyComplete} />
                    <Route exact path = "/create-form" component = {CreateForm} />
                </Switch>
            </main>
            <footer>
                <div className = "d-flex justify-content-center text-center bg-dark text-white">
                    <p className = "m-1">
                        Copyright © 2021 Survey Legends All Rights Reserved.
                        <br />
                        Created By "Enter Your Name Here"
                    </p>
                </div>
            </footer>
        </Router>
    </div>
  );
}

export default App;
