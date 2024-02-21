const express = require('express')
require('dotenv').config();
const app = express()
const port = 8080
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require("cors");//cros for headers

const corsOptions = {
  origin: "http://localhost:8080",
};
app.use(cors(corsOptions));

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function genResponse(inp) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const prompt = inp;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);  
  return text;
}

app.use(express.json())

app.post('/input', async (req, res) => {
  try{
    let { prompt } = req.body;
    console.log(prompt);
    let resp = await genResponse(prompt);
    res.send(resp);
  }
  catch (err) {
    console.error(err);
    res.status(500).send('failed');
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})