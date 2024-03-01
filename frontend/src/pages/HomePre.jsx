import { useState } from 'react';
import Slides from './Slides';
import { SpeedInsights } from "@vercel/speed-insights/react"

function Home() {

  const [prompt, setPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
if (prompt !== ""){
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const apiResponse = await fetch('https://present-buddy-api.onrender.com/input', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      if (!apiResponse.ok) {
        throw new Error('API request failed');
      }

      const rawResponse = await apiResponse.text();
      const startIndex = rawResponse.indexOf("[");
      const endIndex = rawResponse.lastIndexOf("]") + 1; // Include the closing bracket 
      const jsonString = rawResponse.substring(startIndex, endIndex);

      Slides(jsonString);
      console.log(jsonString);  
      setGeneratedText("PPT generated");//TODO: REMOVE THIS LINE
    } catch (error) {
      console.error('Error:', error);
      setError("An error occurred while generating text. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }
else{
    alert("Please provide an input!");
  }
  };

  
  return (
    
    <div className="App">
      <SpeedInsights/>
      <h1 className=''>Present Buddy</h1>
      <div className="typewriter">
        for automated presentation
      </div>
      <div className="custom-shape-divider-bottom-1707907537">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      <form id='converterForm' onSubmit={handleSubmit}>

        <div id="main">
          <div id="container">
            <div id="text-field">
              <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} id="text" placeholder="Provide information on the topic .. " />
              <button type="submit" id="submitButton">Generate PPT</button>
            </div>
            <div id="upload">
              <input id="file" type="file" />
              <button id="submitButton" type="upload" >Upload</button>
            </div>
          </div>
        </div>
      </form>
      {isLoading && <div>Generating Presentaion...</div>}
      {error && <div className="error-message">{error}</div>}
      {generatedText && <div>{generatedText}</div>}

    </div>
  );
}

export default Home;