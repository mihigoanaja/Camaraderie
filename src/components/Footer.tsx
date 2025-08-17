import React, { useState, useEffect } from 'react';

function Footer() {
  // State for holding the fetched data, loading status, and error handling
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // URL for the API call
    const url =
      'https://atinas.alreflections.net/api/aHR0cHM6Ly9vbmV0YWcucGFnZXMuZGV2L2FscmVmbGVjdGlvbnMtZm9vdGVyLmh0bWw=';

    // Fetch the data
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        // If the response is not ok, throw an error
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Parse the response and update the state
        const textData = await response.text();
        setData(textData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // No matter what, stop loading
      }
    };

    // Call the fetch function
    fetchData();
  }, []); // Empty dependency array means this runs only once when the component mounts

  // Handle loading, error, and rendering the fetched data
  if (loading) {
    return <div>Loading...</div>; // Simple loading message
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if something went wrong
  }

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: data, // Render the fetched HTML content
        }}
      />
    </div>
  );
}

export default Footer;