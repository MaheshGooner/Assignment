package stepdefinitions;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageStepDefinition extends BaseStepDefinition {

	@Before
	public void setUp() {
		driver = launchBrowser.launchChromeBrowser();
	}
	
	@After
	public void tearDown(Scenario scenario) throws Exception {
		logger.info("Execution Ends");
		if (scenario.isFailed()) {
			scenario.embed(((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES), "image/png");
		}
		driver.quit();
	}
	
	@Given("^I am on the home page$")
	public void i_am_on_the_home_page() throws Throwable {
		driver = onHomePage.navigateToHomePage(driver);
	}

	@When("^I enter Username and Password$")
	public void i_enter_Username_and_Password() throws Throwable {
		Thread.sleep(10000);
	}

	@When("^Click on Login button$")
	public void click_on_Login_button() throws Throwable {
		
	}

	@Then("^I should be logged in successfully$")
	public void i_should_be_logged_in_successfully() throws Throwable {
		
	}

}
