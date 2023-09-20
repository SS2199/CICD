import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: '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'
});

const owner = 'SS2199';
const repo = 'CICD';

async function getWorkflows() {
  try {
    const response = await octokit.actions.listRepoWorkflows({
      owner,
      repo,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    console.log('Workflows:', response.data);
  } catch (error) {
    console.error('Error getting workflows:', error);
  }
}

getWorkflows();
