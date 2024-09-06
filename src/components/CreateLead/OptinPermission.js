import React, { useState } from 'react';

const OptInForm = () => {
  const [optIns, setOptIns] = useState({
    whatsapp: false,
    sms: false,
    email: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setOptIns({
      ...optIns,
      [name]: checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Opt-in choices:', optIns);
  };

  return (
    <form onSubmit={handleSubmit} className='row'>
      <div className='col-4'>
        <label>
          <input
            type="checkbox"
            name="whatsapp"
            checked={optIns.whatsapp}
            onChange={handleChange}
          />
          WhatsApp 
        </label>
      </div>
      <div className='col-4'>
        <label>
          <input
            type="checkbox"
            name="sms"
            checked={optIns.sms}
            onChange={handleChange}
          />
          SMS 
        </label>
      </div>
      <div className='col-4'>
        <label>
          <input
            type="checkbox"
            name="email"
            checked={optIns.email}
            onChange={handleChange}
          />
          Email Option
        </label>
      </div>
    </form>
  );
};

export default OptInForm;
