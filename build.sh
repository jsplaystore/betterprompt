#!/bin/bash
# Replace placeholder with actual API key from environment variable
if [ -n "$GROQ_API_KEY" ]; then
  sed "s/__GROQ_API_KEY__/$GROQ_API_KEY/g" index.html > index.tmp.html
  mv index.tmp.html index.html
fi
