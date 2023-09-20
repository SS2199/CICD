// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: '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'
  })
  
  await octokit.request('GET /repos/{owner}/{repo}/actions/workflows', {
    owner: 'SS2199',
    repo: 'COCD',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })