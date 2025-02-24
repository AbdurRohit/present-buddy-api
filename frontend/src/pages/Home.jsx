import { useState, useEffect } from 'react';
import Slides from './Slides';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../images/pb.jpg';

function Home() {
  const [prompt, setPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  
 
  const apiUrl = 'present-buddy-api.onrender.com/input';

  useEffect(() => {
    let progressInterval;
    
    if (isLoading) {
      setProgress(0);
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 1;
        });
      }, 40); 
    } else {
      clearInterval(progressInterval);
    }
    
    return () => clearInterval(progressInterval);
  }, [isLoading]);

  const handleSubmit = async (event) => {
    if (prompt !== "") {
      event.preventDefault();
      setIsLoading(true);
      setError(null);
      
      // Wait for progress bar to complete (4 seconds)
      setTimeout(async () => {
        try {
          const apiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt })
          });
          
          if (!apiResponse.ok) {
            throw new Error('API request failed');
          }
          
          const rawResponse = await apiResponse.text();
          const startIndex = rawResponse.indexOf("[");
          const endIndex = rawResponse.lastIndexOf("]") + 1;
          
          const jsonString = rawResponse.substring(startIndex, endIndex);
          
          Slides(jsonString);
          console.log(jsonString);
          setGeneratedText("PPT generated");
        } catch (error) {
          console.error('Error:', error);
          setError("An error occurred while generating text. Please try again.");
        } finally {
          setIsLoading(false);
        }
      }, 4000);
    } else {
      alert("Please provide an input!");
      setShow(true);
    }
  };
  
  return (
    <>
      <SpeedInsights/>
      <Analytics/>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Present Z
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className='main'>
        <div className="heading">
          Can I generate presentation on the go ?
        </div>
        <div className="heading">
          We got you, introducing 
          <h1>Present Z</h1>
          The Present buddy
        </div>
        <Container id="container">
          <Form onSubmit={handleSubmit}>
            <Col>
              <Form.Group className="flex-column" controlId="exampleForm.ControlTextarea1" >
                <Form.Control 
                  as="textarea" 
                  rows={8} 
                  value={prompt} 
                  onChange={(e) => setPrompt(e.target.value)} 
                  placeholder="Provide information on the topic .. " 
                />
              </Form.Group>
              <h3>or</h3>
              <Form.Group controlId="formFile" className="flex-column">
                <Form.Control type="file" />
              </Form.Group>
              <Button type="submit" id="submitButton">Generate ppt</Button>
            </Col>
            
            {isLoading && (
              <div className="mt-3">
                <div style={{ fontSize: '14px', marginBottom: '8px' }}>Generating Presentation...</div>
                <div 
                  style={{ 
                    width: '100%', 
                    height: '10px', 
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    overflow: 'hidden',
                    border: '1px solid #ddd'
                  }}
                >
                  <div 
                    style={{ 
                      width: `${progress}%`, 
                      height: '100%', 
                      backgroundColor: '#28a745',
                      borderRadius: '5px',
                      transition: 'width 0.1s ease-in-out'
                    }}
                  />
                </div>
              </div>
            )}
            
            {error && <div className="error-message mt-3">{error}</div>}
            {generatedText && !isLoading && <div className="mt-3">{generatedText}</div>}
          </Form>
        </Container>
      </div>
    </>
  );
}

export default Home;