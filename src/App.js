/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { categorizeDomain } from './domainCategories';
import './App.css';

function App() {
  const [domainName, setDomainName] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkAvailability = () => {
    if (domainName.trim() === '') {
      setError('Please enter a domain name');
      return;
    }

    const apiUrl = `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_9wfARMW9cg5AMvW6tYr7A1i3RLxsQ&domainName=${domainName}&credits=DA`;

    // Display loader
    setLoading(true);

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Hide loader
        setLoading(false);

        if (data.DomainInfo.domainAvailability === 'AVAILABLE') {
          const domainCategory = categorizeDomain(domainName);

          if (domainCategory === 'Unknown') {
            setError(`The domain category for ${domainName} is unknown. The domain is not available.`);
            setResult(null);
          } else {
            setResult(`Congratulations! The domain ${domainName} is available. Category: ${domainCategory}`);
            setError(null);
          }
        } else {
          setResult(`Sorry, the domain ${domainName} is not available.`);
          setError(`Sorry, the domain ${domainName} is not available.`);
        }
      })
      .catch(error => {
        console.error('Error:', error);

        // Hide loader in case of an error
        setLoading(false);

        // Display error message
        setResult(null); // Clear previous results
        setError('An error occurred while checking domain availability.');
      });
  };
  return (
    <div className='text-center '>
      <header className='bg-warning'>
        <h1>Domain Availability Checker</h1>
      </header>

      <nav>
        <a href="#">Home</a>
        <a href="https://www.dahbihoussam.online/#about" target={'_blank'}>About Us</a>
        <a href="https://www.dahbihoussam.online/#contact" target={'_blank'}>Contact</a>
      </nav>

      <main className='mt-5'>
        <h1 className='text-secondary'>Check Domain Availability</h1>

        <input 
          type="text"
          id="domainName"
          className=' form-control mt-3'
          placeholder="Enter domain name ..."
          value={domainName}
          onChange={(e) => setDomainName(e.target.value)}
        />
        <button onClick={checkAvailability} className='text-white btn btn-warning mt-2'>Check Availability</button>






        {/* Display Bootstrap alert for errors and availability results */}
        {(error || result) && (
          <div
            className={`alert ${error ? 'alert-danger' : 'alert-success'}`}
            role="alert" style={{ marginTop: '10px' }}
          >
            {error || result}
          </div>
        )}
      </main>


      <footer>
        &copy; <a className='text-decoration-none text-warning' href="https://www.dahbihoussam.online/" target={'_blank'}>StrongbyWeb.com</a> 2024  All rights reserved.
      </footer>
    </div>
  );
}

export default App;
