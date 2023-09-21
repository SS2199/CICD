const https = require('https');

const githubToken = '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'; // Replace with your GitHub Personal Access Token
const owner = 'SS2199';
const repo = 'CICD';
const branch = 'main'; // Change to your branch name
const pathToFile = '.github/workflows/workflow1.yml'; // Path to your YAML file
const content = `
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install Dependencies
        run: |
          npm install

          - name: SonarQube Analysis
          run: |
            curl -o sonar-scanner.zip -L https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-windows.zip
            echo "C:\Users\sindhu\sonar-scanner-5.0.1.3006-windows\bin\sonar-scanner.bat"
        
      - name: Test using Jest
          run: npm test
  
        - name: Run JMeter Tests
          uses: QAInsights/PerfAction@v3.1
          with:
            test-plan-path: ./CSVSample.jmx

      


`; // Replace with the content of your updated YAML file

// Get the current SHA of the file from GitHub
function getCurrentFileSHA() {
  return new Promise((resolve, reject) => {
    const auth = `token ${githubToken}`;

    // Define the request options
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${owner}/${repo}/contents/${pathToFile}?ref=${branch}`,
      method: 'GET',
      headers: {
        'User-Agent': 'Node.js',
        'Authorization': auth,
      },
    };

    // Send the request to GitHub
    const req = https.request(options, (res) => {
      let response = '';

      res.on('data', (chunk) => {
        response += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          const fileData = JSON.parse(response);
          resolve(fileData.sha);
        } else {
          reject(`Failed to fetch current file SHA. Status code: ${res.statusCode}`);
        }
      });
    });

    req.on('error', (error) => {
      reject(`Error fetching current file SHA: ${error.message}`);
    });

    req.end();
  });
}

// Create or update the file on GitHub
async function createOrUpdateFile() {
  try {
    // Fetch the current SHA of the file
    const currentSHA = await getCurrentFileSHA();

    // Prepare the data to send in the request
    const auth = `token ${githubToken}`;
    const encodedContent = Buffer.from(content).toString('base64');

    const data = {
      message: 'Update CI/CD YAML file',
      content: encodedContent,
      branch: branch,
      sha: currentSHA, // Include the current SHA
    };

    // Define the request options
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${owner}/${repo}/contents/${pathToFile}`,
      method: 'PUT',
      headers: {
        'User-Agent': 'Node.js',
        'Authorization': auth,
        'Content-Type': 'application/json',
      },
    };

    // Send the request to GitHub
    const req = https.request(options, (res) => {
      let response = '';
      res.on('data', (chunk) => {
        response += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 201) {
          console.log('YAML file pushed successfully.');
        } else {
          console.error('Error pushing YAML file:', response);
        }
      });
    });

    req.on('error', (error) => {
      console.error('Error pushing YAML file:', error);
    });

    req.write(JSON.stringify(data));
    req.end();
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to create or update the file
createOrUpdateFile();