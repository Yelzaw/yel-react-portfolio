import React, { useState } from 'react';
import '../styles/Contact.css';

// Here we import a helper function that will check if the email is valid
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


export default function Contact() {
    const [state, setState] = useState({
        name:'',
        email:'',
        message:'',
    }); 

    const [errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = state;
    
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;


        // Based on the input type, we set the state of either email or message
        if (inputType === 'email') {
            const validEmail = validateEmail(inputValue)
            if (!validEmail) {
                setErrorMessage('Email is invalid.');
            } else {
                setErrorMessage('')
            }
        } else if (!inputValue.length) {
            setErrorMessage(`${inputType} is required.`)
        } else {setErrorMessage()}

        if(!errorMessage){
            setState({ ...state, [inputType]: inputValue})
        }
    };



    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
          e.preventDefault();

          // If everything goes according to plan, we want to clear out the input after a successful registration.
          state.email='';
          state.name='';
          state.message='';
      };

    return (
        <div className = "container mt-2 mb-2">
            <h1 style={{color:'black'}}>Contact</h1>
            <form id="contact-form" >
                <div className="controls">
                    <div className="row">
                        <div classNames="col-md-12">
                            <div classNames="form-group">
                                <label for="form_name">Name: *</label>
                                <input 
                                value={name}
                                onChange={handleInputChange}
                                type="name" 
                                name="name" 
                                className="form-control"
                                placeholder="Please enter your name" 
                                />
                            </div>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label for="form_email">Email address:*</label>
                                <input 
                                // value={email}                 
                                id="form_email" 
                                type="email" 
                                name="email"
                                className="form-control"
                                onChange={handleInputChange}
                                placeholder="Please enter your email" 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label for="form_message">Message: *</label>
                                <textarea 
                                value={message}
                                id="form_message" 
                                type="message"
                                name="message" 
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Write your message here." 
                                rows="4">                                    
                                </textarea>
                            </div>
                        </div>
                        <div className="col-md-12 mt-2">
                        {errorMessage && (
                            <div>
                            <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        </div>
                        <div className="col-md-12 mt-2">
                            <button type="button" className="btn btn-success btn-send  pt-2 btn-block" onClick={handleFormSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
      );
}
