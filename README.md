# BetterPrompt

A web-based tool that helps you craft better AI prompts through guided questions and real-time analysis. Whether you're starting from scratch or refining an existing prompt, BetterPrompt provides structured feedback to improve clarity, specificity, and effectiveness.

## Features

### Transform Mode
Start with a rough idea and let BetterPrompt guide you through contextual questions to build a well-crafted prompt:
- Detects your task type automatically (writing, explaining, coding, analyzing)
- Asks targeted clarifying questions based on your specific use case
- Uses AI to synthesize your answers into a polished, actionable prompt
- Saves your draft automatically as you work

### Analyze Mode
Paste an existing prompt and get instant feedback across multiple dimensions:
- **Clarity Score**: Overall prompt quality rating
- **Clarity**: Checks for focus and understandability
- **Specificity**: Identifies vague language and suggests improvements
- **Structure**: Evaluates organization and formatting
- **Role Definition**: Assesses whether context is properly set for the AI

## How It Works

The app uses intelligent question branching to understand your needs:
- For **writing tasks**: Focuses on recipient, concerns, and desired outcomes
- For **explanations**: Tailors questions about audience level and learning goals
- For **coding**: Asks about language, constraints, and use cases
- For **analysis**: Explores context, key insights, and action items

Transform mode leverages the Groq API with the `compound-mini` model to synthesize contextual, situation-specific prompts that avoid generic templates.

## Setup & Installation

### Local Usage
1. Clone this repository:
   ```bash
   git clone https://github.com/jsplaystore/betterprompt.git
   cd betterprompt
   ```

2. Open `index.html` in any modern web browser

### API Configuration (for Transform Mode)

**For Local Development:**
1. Get a free API key from [Groq Console](https://console.groq.com)
2. Open `index.html` in a text editor
3. Locate line ~499 and replace the placeholder:
   ```javascript
   const API_KEY = 'your-groq-api-key-here';
   ```

**For Vercel Deployment:**
The API key is configured via environment variables:
1. In your Vercel project settings, go to Environment Variables
2. Add `GROQ_API_KEY` with your Groq API key
3. The build script automatically injects it during deployment

**Note:** The analyze feature works completely offline without any API key.

## Deployment

### Deploy to Vercel
```bash
vercel --prod
```

Or connect your GitHub repository through the [Vercel dashboard](https://vercel.com).

### Other Hosting Options
This is a static single-page application with no build process, so it works on any static hosting:
- **GitHub Pages**: Enable in repository settings
- **Netlify**: Drag and drop the folder or connect via Git
- **Cloudflare Pages**: Deploy directly from GitHub
- **Any web server**: Just upload the files

## Technical Details

- **No dependencies**: Pure HTML, CSS, and vanilla JavaScript
- **Fully client-side**: All analysis runs in the browser
- **Local storage**: Automatically saves drafts between sessions
- **Responsive design**: Works on desktop and mobile devices
- **Lightweight**: Single ~33KB HTML file

## Use Cases

- Writing professional emails or documentation
- Creating prompts for ChatGPT, Claude, or other AI assistants
- Learning prompt engineering best practices
- Teaching students how to interact with AI effectively
- Debugging why an AI prompt isn't producing good results

## License

MIT
