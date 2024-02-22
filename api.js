const express = require('express')
require('dotenv').config();
const app = express()
const port = 8080
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require("cors");//cros for headers

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function genResponse(inp) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const prompt = inp;
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  ReadableStream = false;
  console.log(typeof(response));
  console.log (typeof(text));
  return text;
}

app.use(express.json())

app.post('/input', async (req, res) => {
  try{
    let prompt = req.body;
    console.log(prompt.prompt);
    let resp = await genResponse(prompt.prompt);
    console.log(resp);
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