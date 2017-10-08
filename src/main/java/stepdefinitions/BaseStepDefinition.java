package stepdefinitions;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import framework.LaunchBrowser;
import pageobjects.amazonHomePage;
import pageobjects.amazonSearchPage;

public class BaseStepDefinition {
	
	public static final Logger logger = Logger.getLogger(BaseStepDefinition.class);
	protected static WebDriver driver;
	protected amazonHomePage onHomePage = new amazonHomePage(driver);
	protected LaunchBrowser  launchBrowser = new LaunchBrowser(driver);
	protected amazonSearchPage onSearchPage = new amazonSearchPage(driver);
	
	
	

}
