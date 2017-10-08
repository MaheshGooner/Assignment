package utility;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Wait {
	protected  WebDriverWait wait;
	protected int waitTime = 60;
	
	public void waitForElementTobeClickable(WebElement locator) {
		//wait.until(ExpectedConditions.elementToBeClickable(locator));
	}
	
	public void waitForElementToBeVisible(WebElement locator,WebDriver driver) {
		wait = new WebDriverWait(driver, waitTime);
		wait.until(ExpectedConditions.visibilityOf(locator));
		
	}
	
	public void waitForAllElementsToBeVisible(By locator,WebDriver driver) {
		wait = new WebDriverWait(driver, waitTime);
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(locator));
	}
	
	
	

}
