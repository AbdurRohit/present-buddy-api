const express = require('express')
const app = express()
const port = 8080
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function genResponse(inp) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = inp;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  
  return text;
}

app.get('/input', (req, res) => {
    let prompt = req.body()
    let resp = genResponse(prompt);
  res.send(resp);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})