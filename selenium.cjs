const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

// Configure Chrome options if needed
const options = new chrome.Options();


async function runSeleniumTest() {
  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    // Open a webpage
    await driver.get('http://localhost:8000/');

    // Wait for the title to match the expected title
    const expectedTitle = 'Hello world';
    await driver.wait(until.elementLocated(By.xpath("//*[text()='Hello world']")), 5000); // Wait for the title to match

    console.log('Test Passed! Title matches the expected value.');
  } catch (error) {
    console.error(`Test Failed! Error: ${error.message}`);
  } finally {
    // Close the browser window
    await driver.quit();

    // Stop the ChromeDriver server
    chromedriver.stop();
  }
}

// Call the function to run the Selenium test
runSeleniumTest();