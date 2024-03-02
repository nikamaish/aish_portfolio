import React, { useState } from 'react';
import './contact.scss';

export default function Contact() {
  const [message, setMessage] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    // here we add above line to get the name of the user 

    const msg  = e.target.message.value;
  // we write bcz we are getting that value from the form  

    const subject = e.target.subject.value;


    const emailSubject = encodeURIComponent(subject);
    // uri component is used to encode the subject and body of the email, encoding means to convert the string into a format that can be passed as a url
    // but why we are doing this? bcz if we don't do this then the email will not be sent to the user, it will be sent to the spam folder of the user
    // so we have to encode the subject and body of the email then why we dont encode name and email? bcz they are not going to be used in the subject and body of the email
    // so we don't need to encode them 
    
    const emailBody = encodeURIComponent(msg);

    var allInputs = document.querySelectorAll('input');
    // here we are selecting all the input fields of the form
    //  but why we are doing this? bcz we want to clear the input fields after the user has submitted the form

   var alltext = document.querySelector('textarea');

   
    allInputs.forEach(input => input.value = '');
    // above line is used to clear the input fields after the user has submitted the form
    alltext.value = '';

    setMessage('Thanks, I\'ll reply ASAP :)');

    window.open(`https://mail.google.com/mail/u/0/?fs=1&to=aishnikam31@gmail.com&su=${emailSubject}&body=${emailBody}&tf=cm`); 
  // i have doubt, when it open new window then how  it autofills all the details in the email, i mean how it knows that it has to autofill the subject and body of the email
  // i think it is bcz we have passed the subject and body of the email in the url, so it knows that it has to autofill the subject and body of the email 
  
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input 
          type='text'
          name='name'
          placeholder='Name'
          required
          
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            required
          />

          <input
          type='text'
          name='subject'
          placeholder='Subject'
          required
          />

          <textarea
            name="message"
            placeholder="Message"
          required
          ></textarea>


          <button type="submit">Send</button>
          {message && <span>{message}</span>}
        </form>
      </div>
    </div>
  );
}
