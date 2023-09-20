import axios from 'axios';

const githubToken = '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';
const repositoryOwner = 'SS2199';
const repositoryName = 'CICD';
const workflowFileName = 'test.yml';

async function triggerWorkflow() {
  try {
    const response = await axios.post(
        `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/actions/workflows/${workflowFileName}/dispatches`,
      {
        ref: 'main', // Specify the branch or ref
        inputs: {
          // Provide any input parameters if your workflow expects them
          exampleParam: 'value',
        },
      },
      {
        headers: {
          Authorization: `token ${githubToken}`,
        },
      }
    );

    console.log('Workflow dispatch triggered successfully:', response.data);
  } catch (error) {
    console.error('Error triggering workflow dispatch:', error);
  }
}

triggerWorkflow();
