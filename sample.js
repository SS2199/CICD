import { Octokit } from '@octokit/rest';
import fetch from 'node-fetch';

const octokit = new Octokit({
  auth: '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',
  request: { fetch },
});

const owner = 'SS2199';
const repo = 'Action';
const workflowFileName = '.github/workflows/trigger-workflow.yml'; // Name of the workflow YAML file

async function triggerWorkflow() {
  try {
    const response = await octokit.actions.createWorkflowDispatch({
      owner,
      repo,
      workflow_file: workflowFileName,
      ref: 'main', // Specify the branch or ref
      inputs: {
        // Provide any input parameters if your workflow expects them
        exampleParam: 'value',
      },
    });

    if (response.status === 204) {
      console.log('Workflow dispatch triggered successfully.');
    } else {
      console.error('Failed to trigger workflow dispatch:', response.statusText);
    }
  } catch (error) {
    console.error('Error triggering workflow dispatch:', error.message);
  }
}

triggerWorkflow();
