import React from "react";
import { useState } from 'react';
import EmploymentForm from './EmploymentForm'
import FreelancerForm from "./FreelancerForm";
const JobPage = () => {
    const [selectedOption, setSelectedOption] = useState('Freelancer');
  
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div>
        <h1>Choose Your Job Type</h1>
        <label>
          <input type="radio" value="Freelancer" checked={selectedOption === 'Freelancer'} onChange={handleChange} />
          Freelancer
        </label>
        <label>
          <input type="radio" value="Employment" checked={selectedOption === 'Employment'} onChange={handleChange} />
          Employment
        </label>
        {selectedOption === 'Freelancer' ? <FreelancerForm /> : <EmploymentForm />}
        <button type='button' style={{ textAlign:'left', borderRadius:5, width:150, height: 30, textAlign:'center', background:'#6CB4EE', margin:30}}>Post</button>
      </div>
    );
  };

  export default JobPage