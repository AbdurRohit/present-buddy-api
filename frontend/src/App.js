
import './App.css';
import { useState } from 'react';

function App() {

  const [prompt, setPrompt] = useState("");
  const [resp, setResp] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/", {
        method: "POST",
        body: {
          prompt: prompt
        },
      });
      let resJson = await res.json();
      setResp = resJson;

      console.log(resJson);
      if (res.status === 200) {
        console.log("Input successful");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1 className=''>Present Buddy</h1>
      <div className="typewriter">
          for automated presentation 
       </div> 
       <div className="custom-shape-divider-bottom-1707907537">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg></div>
      <form id='converterForm' onSubmit={handleSubmit}>

        <div id="main">
          <div id="container">
            <div id="text-field">
              <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} id="text" placeholder="write a breif description.. " />
              <button type="submit" id="submitButton">Go</button>
            </div>
            <div id="upload">
              <input id="file" type="file" />
              <button id="submitButton" type="upload" >Upload</button>
            </div>
          </div>
        </div>
      </form>
      <div dangerouslySetInnerHTML={{ __html: resp }} />
      
    </div>
  );
}

export default App;
