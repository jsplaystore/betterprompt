// Serverless function to proxy Groq API requests
// Keeps API key secure on the server
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const API_KEY = process.env.GROQ_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const { messages, model = 'llama-3.1-70b-versatile', temperature = 1, max_tokens = 1024 } = req.body;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages,
        model,
        temperature,
        max_tokens
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Groq API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
