import React, { useState } from 'react';
import jsonp from 'jsonp';

import './ChewCrew.css'

const ChewCrew = ({ onSignupComplete }) => {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [flavor, setFlavor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // @TODO: Add url to secrets file?
  // @TODO: Error handling
  const handleSubmit = e => {
    setIsSubmitting(true);
    setError(null);
    e.preventDefault();
    const url = 'https://morinaga-america.us4.list-manage.com/subscribe/post-json?u=59d91747229d2e090df15562e&amp;id=cc938b2fca&amp;f_id=0058c0e1f0';
    jsonp(`${url}&FNAME=${fname}&LNAME=${lname}&EMAIL=${email}&FLAVOR=${flavor}`, { param: 'c' }, (err, data) => {
      if (err) {
        // Handle error
        setIsSubmitting(false);
        setError('An error occurred. Please try again.');
      } else {
        setIsSubmitting(false);
        onSignupComplete();
      }  
    });
  };

  return (
    <div className="chew-crew-container">
      <h1 className='title-text'>
        <span className="dessert-mix">Dessert Mix</span>
        <br></br> 
        personality quiz
      </h1>
      <h1 className='desc-text'>One last thing...</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form 
          id="mc-embedded-subscribe-form" 
          className="form-container"
          name="mc-embedded-subscribe-form"
          onSubmit={handleSubmit}>
        <div className="questions-container">
        <input
          id="mce-FNAME"
          name="FNAME"
          type="text"
          value={fname}
          onChange={(e) => setFName(e.target.value)}
          placeholder="First Name"
        />
        <input
          id="mce-LNAME"
          name="LNAME"
          type="text"
          value={lname}
          onChange={(e) => setLName(e.target.value)}
          placeholder="Last Name"
        />
        <input
          id="mce-EMAIL"
          name="EMAIL"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          id="mce-FLAVOR"
          name="FLAVOR"
          type="text"
          value={flavor}
          onChange={(e) => setFlavor(e.target.value)}
          placeholder="Favorite Flavor"
        />
        </div>
        <button className="submit-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'See Results'}
        </button>
      </form>
    </div>
  );
};

export default ChewCrew;