package pageobjects;

import org.openqa.selenium.WebDriver;

public class amazonHomePage {
	
	public WebDriver driver;
	
	public amazonHomePage(WebDriver driver) {
		this.driver = driver;
		
	}

	public WebDriver navigateToHomePage(WebDriver driver) {
		driver.get("https://www.amazon.co.uk");
		return driver;
	}
}
