# BetterPrompt

A simple web tool to help you write better AI prompts through guided questions and real-time analysis.

## Features

- **Transform Mode**: Start with a rough idea and answer contextual questions to generate a well-crafted prompt
- **Analyze Mode**: Paste an existing prompt to get instant feedback on clarity, specificity, structure, and role definition

## How It Works

### Transform Mode
1. Type what you want to ask an AI
2. Answer a few clarifying questions based on your task type (writing, explaining, coding, analyzing)
3. Get a synthesized prompt tailored to your specific situation

### Analyze Mode
1. Paste an existing prompt
2. Get real-time feedback across four dimensions:
   - Clarity: Is it focused and understandable?
   - Specificity: Does it avoid vague language?
   - Structure: Is it well-organized?
   - Role: Does it set context for the AI?

## Setup

This is a single-page web application that runs entirely in the browser.

### Quick Start
1. Clone this repository
2. Open `index.html` in a web browser

### API Configuration
The app uses the Groq API to generate improved prompts. To use the transform feature:

1. Get a free API key from [Groq Console](https://console.groq.com)
2. Open `index.html` in a text editor
3. Find line ~499 and replace the empty `API_KEY` value with your key:
   ```javascript
   const API_KEY = 'your-api-key-here';
   ```

The analyze feature works without an API key.

## Deployment

### Vercel
1. Push this repository to GitHub
2. Import the project in Vercel
3. Deploy as a static site

### Other Platforms
Since this is a static HTML file with no build process, you can deploy it to any static hosting service:
- GitHub Pages
- Netlify
- Cloudflare Pages
- etc.

## License

MIT
