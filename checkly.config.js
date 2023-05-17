const { defineConfig } = require('checkly')

module.exports = defineConfig({
    projectName: 'Personal Website Monitoring',
    logicalId: 'website-monitoring-1',
    repoUrl: 'https://github.com/sambordo1/checkly',
    checks: {
      activated: true,
      muted: false,
      runtimeId: '2022.10',
      frequency: 120,
      locations: ['us-east-1', 'us-east-2', 'us-west-1','us-west-2'],
      tags: ['website', 'api'],
      checkMatch: '**/__checks__/**/*.check.js',
      ignoreDirectoriesMatch: [],
      browserChecks: {
        frequency: 60*24,
        testMatch: '**/__checks__/**/*.spec.js',
      },
    },
    cli: {
      runLocation: 'us-east-1',
    }
   });