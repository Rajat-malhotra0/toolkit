#!/usr/bin/env node

/**
 * Build script for Netlify deployment
 * Replaces environment variable placeholders in index.template.html and outputs to index.html
 */

const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'index.template.html');
const outputPath = path.join(__dirname, 'index.html');

// Read template
let html = fs.readFileSync(templatePath, 'utf8');

// Replace environment variable placeholders
let WEB_CURL_URL = process.env.WEB_CURL_URL || './web-curl/index.html';
let JSON_VIEWER_URL = process.env.JSON_VIEWER_URL || './json-viewer/index.html';

// Ensure absolute URLs if they look like domains but lack protocol
if (WEB_CURL_URL && !WEB_CURL_URL.startsWith('http') && !WEB_CURL_URL.startsWith('/') && !WEB_CURL_URL.startsWith('.')) {
    WEB_CURL_URL = 'https://' + WEB_CURL_URL;
}

if (JSON_VIEWER_URL && !JSON_VIEWER_URL.startsWith('http') && !JSON_VIEWER_URL.startsWith('/') && !JSON_VIEWER_URL.startsWith('.')) {
    JSON_VIEWER_URL = 'https://' + JSON_VIEWER_URL;
}

html = html.replace(/%%WEB_CURL_URL%%/g, WEB_CURL_URL);
html = html.replace(/%%JSON_VIEWER_URL%%/g, JSON_VIEWER_URL);

// Write output
fs.writeFileSync(outputPath, html);

console.log('✅ Environment variables injected successfully');
console.log(`   WEB_CURL_URL: ${WEB_CURL_URL}`);
console.log(`   JSON_VIEWER_URL: ${JSON_VIEWER_URL}`);
