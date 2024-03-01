import { useState } from 'react';
import Slides from './Slides';
import { SpeedInsights } from "@vercel/speed-insights/react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import img from '../images/pb';

function Home() {

  const [prompt, setPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

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
    setShow(true)
  }
  };

  
  return (
    <>
      <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="{}"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              React Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar>
    <div className='main'>
       {/* <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert> */}
    <div className="heading">
      <h1 className=''>Presentz</h1>
        Automated presentation on the go ⽕
    </div>
    <Container id="container">
    <Form>
      <Col>
    <Form.Group className="flex-column" controlId="exampleForm.ControlTextarea1" id = "fgroup">
      <Form.Control as="textarea" rows={8} value={prompt} onChange={(e) => setPrompt(e.target.value)} id="text" placeholder="Provide information on the topic .. " />
    </Form.Group>
        <h3>or</h3>
    <Form.Group controlId="formFile" className="flex-column" id = "fgroup">
        <Form.Control type="file" />
      </Form.Group>
      <Button type="submit" id="submitButton">Generate ppt</Button>
      </Col>
    
  </Form>
  </Container>
  </div>
  </>
  );
}

export default Home;