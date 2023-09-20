const { Octokit } = require('@octokit/rest');

// Initialize Octokit with your GitHub Personal Access Token
const octokit = new Octokit({
  auth: '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'
});

// Define the owner and repository name
const owner = 'SS2199';
const repo = 'CICD';

// Make the API request to get workflows
async function getWorkflows() {
  try {
    const response = await octokit.actions.listRepoWorkflows({
      owner,
      repo,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    // Handle the response data as needed
    console.log('Workflows:', response.data);
  } catch (error) {
    console.error('Error getting workflows:', error);
  }
}

// Call the function to get workflows
getWorkflows();
