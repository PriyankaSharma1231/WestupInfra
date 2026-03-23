const Groq = require("groq-sdk");

exports.handler = async (event) => {
  const { message, history } = JSON.parse(event.body);

  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "system",
        content: `You are a helpful solar energy assistant for Westup Infra Pvt. Ltd., a solar company in India. 
You help industrial and commercial clients understand solar energy solutions.
Keep responses short and clear.`
      },
      ...history,
      { role: "user", content: message }
    ],
    max_tokens: 300,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      reply: response.choices[0]?.message?.content
    })
  };
};