const fs = require('fs');
const path = require('path');

// Simple .env parser to avoid dependencies
function parseEnv(content) {
    const env = {};
    content.split('\n').forEach(line => {
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
            const key = match[1].trim();
            const value = match[2].trim().replace(/^["']|["']$/g, ''); // Remove quotes
            env[key] = value;
        }
    });
    return env;
}

// Load .env if it exists
let env = {};
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
    console.log('Loading .env file...');
    const envContent = fs.readFileSync(envPath, 'utf8');
    env = parseEnv(envContent);
} else {
    console.log('No .env file found, using process.env or defaults...');
}

// Merge with process.env (process.env takes precedence)
const config = {
    WEB_CURL_URL: process.env.WEB_CURL_URL || env.WEB_CURL_URL || './web-curl/index.html',
    JSON_VIEWER_URL: process.env.JSON_VIEWER_URL || env.JSON_VIEWER_URL || './json-viewer/index.html'
};

// Generate config.js content
const fileContent = `const CONFIG = {
    // URL for the Web Curl tool
    WEB_CURL_URL: '${config.WEB_CURL_URL}',
    
    // URL for the JSON Viewer tool
    JSON_VIEWER_URL: '${config.JSON_VIEWER_URL}'
};`;

// Write to config.js
const configPath = path.join(__dirname, 'config.js');
fs.writeFileSync(configPath, fileContent);

console.log('✅ config.js updated successfully!');
console.log('Web Curl URL:', config.WEB_CURL_URL);
console.log('JSON Viewer URL:', config.JSON_VIEWER_URL);
