package framework;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LaunchBrowser {
	public WebDriver driver;
	
	public LaunchBrowser(WebDriver driver) {
		this.driver = driver;
	}

	public WebDriver launchChromeBrowser() {
		System.setProperty("webdriver.chrome.driver", "src/main/java/resources/chromedriver.exe");
		driver = new ChromeDriver();
		return driver;
	}
	
}
