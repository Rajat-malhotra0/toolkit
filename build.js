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
const WEB_CURL_URL = process.env.WEB_CURL_URL || './web-curl/index.html';
const JSON_VIEWER_URL = process.env.JSON_VIEWER_URL || './json-viewer/index.html';

html = html.replace(/%%WEB_CURL_URL%%/g, WEB_CURL_URL);
html = html.replace(/%%JSON_VIEWER_URL%%/g, JSON_VIEWER_URL);

// Write output
fs.writeFileSync(outputPath, html);

console.log('✅ Environment variables injected successfully');
console.log(`   WEB_CURL_URL: ${WEB_CURL_URL}`);
console.log(`   JSON_VIEWER_URL: ${JSON_VIEWER_URL}`);
