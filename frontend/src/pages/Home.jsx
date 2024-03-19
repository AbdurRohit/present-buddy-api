import { useState } from 'react';
import Slides from './Slides';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import Alert from 'react-bootstrap/Alert';
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

  const handleSubmit = async (event) => {
    if (prompt !== "") {
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
    else {
      alert("Please provide an input!");
      setShow(true)
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
            Present Buzz
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
          Can I generate presentation on the go ?
        </div>
        <div className="heading">
          We got you, introducing 
          <h1>PresentBuzz</h1>

        </div>
        <Container id="container">
          <Form onSubmit={handleSubmit}>
            <Col>
              <Form.Group className="flex-column" controlId="exampleForm.ControlTextarea1" >
                <Form.Control as="textarea" rows={8} value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Provide information on the topic .. " />
              </Form.Group>
              <h3>or</h3>
              <Form.Group controlId="formFile" className="flex-column">
                <Form.Control type="file" />
              </Form.Group>
              <Button type="submit" id="submitButton">Generate ppt</Button>
            </Col>
            {isLoading && <div>Generating Presentaion...</div>}
            {error && <div className="error-message">{error}</div>}
            {generatedText && <div>{generatedText}</div>}
          </Form>
        </Container>
      </div>
    </>
  );
}

export default Home;