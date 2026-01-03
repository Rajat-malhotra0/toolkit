# DevToolkit

The central landing page for the DevToolkit suite of developer utilities.

## Tools

This landing page links to the following tools:

-   **[Web Curl](https://github.com/Rajat-malhotra0/web-curl)**: A modern, web-based cURL tool.
-   **[JSON Viewer](https://github.com/Rajat-malhotra0/json-viewer)**: A powerful JSON visualization and formatting tool.
-   **[HTML Preview](https://html-preview-simple.netlify.app/)**: A simple web application that allows you to write HTML code and see the result instantly.
-   **[CORS Proxy](https://github.com/Rajat-malhotra0/cors-proxy)**: A lightweight CORS proxy server for the DevToolkit web-curl application.

## Configuration & Deployment

This project uses environment variables to configure links to the tools. This allows you to deploy the landing page separately from the tools and link to them dynamically.

### Netlify Deployment

1. **Set Environment Variables** in your Netlify dashboard:

    - Go to Site settings → Build & deploy → Environment
    - Add the following variables:
        ```
        WEB_CURL_URL=https://your-web-curl-deployment.netlify.app
        JSON_VIEWER_URL=https://your-json-viewer-deployment.netlify.app
        HTML_PREVIEW_URL=https://html-preview-simple.netlify.app/
        ```

2. **Deploy**: Netlify will automatically run the build script that injects these values into the HTML.

### Local Development

1. The source file is `index.template.html` (this is what you should edit)
2. Create a `.env` file if you want custom URLs (optional - see `.env.example`)
3. Run the build script to generate `index.html`:
    ```bash
    node build.js
    ```
4. Open the generated `index.html` in your browser

**Note**: `index.html` is gitignored because it's a generated file. Always edit `index.template.html`.

### How It Works

-   The `index.template.html` file is the source template containing placeholders like `%%WEB_CURL_URL%%`, `%%JSON_VIEWER_URL%%`, and `%%HTML_PREVIEW_URL%%`
-   During build time (on Netlify) or when you run `build.js` locally, these placeholders are replaced with actual URLs from environment variables
-   The result is written to `index.html` (which is gitignored)
-   If environment variables are not set, it defaults to relative paths (`./web-curl/index.html`, etc.)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
