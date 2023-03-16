'use client';

import { useState } from 'react';

export const SampleForm = () => {
  const [sample, setSample] = useState('');
  const [number, setNumber] = useState('3');
  const [mocks, setMocks] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    const response = await fetch(`${window.location.origin}/api/mocks`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sample,
        number,
      }),
    });

    const content = await response.json();
    setMocks(content);
    setIsLoading(false);
  };

  return (
    <div className="d-flex">
      <form className="w-50 p-3">
        <div className="mb-3">
          <label htmlFor="sample" className="form-label">
            Show me a sample object to generate mocks
          </label>
          <textarea
            className="form-control w-100 bg-dark text-light"
            id="sample"
            name="sample"
            rows={10}
            required
            value={sample}
            onChange={(event) => setSample(event.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            How many mocks to generate
          </label>
          <input
            id="number"
            type="number"
            className="form-control w-50 bg-dark text-light"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            required
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-primary"
          disabled={isLoading}
        >
          {isLoading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          {isLoading ? ' Generating' : 'Generate'}
        </button>
      </form>
      <div className="w-50 p-3">
        <header>Mocks</header>
        <pre className="">{mocks}</pre>
      </div>
    </div>
  );
};
