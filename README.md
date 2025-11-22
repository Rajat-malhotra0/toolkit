# DevToolkit

The central landing page for the DevToolkit suite of developer utilities.

## 🚀 Tools

This landing page links to the following tools:

- **[Web Curl](https://github.com/Rajat-malhotra0/web-curl)**: A modern, web-based cURL tool.
- **[JSON Viewer](https://github.com/Rajat-malhotra0/json-viewer)**: A powerful JSON visualization and formatting tool.

## ⚙️ Configuration & Deployment

This project uses a `config.js` file to manage links to the tools. This allows you to deploy the landing page separately from the tools and link to them dynamically.

### Using .env for Configuration

You can use a `.env` file to configure the URLs during deployment or local development.

1. Create a `.env` file in the root directory:
   ```env
   WEB_CURL_URL=https://your-web-curl-deployment.com
   JSON_VIEWER_URL=https://your-json-viewer-deployment.com
   ```

2. Run the configuration generator script:
   ```bash
   node generate-config.js
   ```
   This will update `config.js` with the values from your `.env` file.

3. Deploy the static files (`index.html`, `style.css`, `config.js`, etc.).

### Manual Configuration

Alternatively, you can manually edit `config.js`:

```javascript
const CONFIG = {
    WEB_CURL_URL: './web-curl/index.html', // Or absolute URL
    JSON_VIEWER_URL: './json-viewer/index.html' // Or absolute URL
};
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT
