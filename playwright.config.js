const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  //-------------------------------
	// Default config settings
	//--------------------------------
	testDir: 'tests',
	outputDir: 'test-results',
	fullyParallel: true,
	forbidOnly: !!process.env.CI, // Fail the build on CI if you accidentally left test.only in the source code.
	retries: process.env.CI ? 2 : 0, // Retry on CI only.
	workers: process.env.CI ? 1 : undefined, // Opt out of parallel tests on CI.
	reporter: 'list',
	use: {
		baseURL: 'http://samuel-bordo.s3-website.us-east-2.amazonaws.com/',
		trace: 'on-first-retry', //Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer
		browserName: 'chromium',
		headless: false,
		contextOptions: {
			ignoreHTTPSErrors: true
		}
	},

	//----------------------------------
	// Different Projects/Environments
	//----------------------------------
	projects: [
    {
      name: 'smoke',
      testDir: 'tests',
      use: { ...devices['Desktop Chrome'] },
    },
  ]
});

