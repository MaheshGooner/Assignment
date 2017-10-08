package pageobjects;

import java.util.Map;
import java.util.TreeMap;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import junit.framework.Assert;
import utility.Wait;

public class amazonSearchPage {
	public WebDriver driver;

	By results;
	
	TreeMap<Float, Integer> tMap = new TreeMap<Float, Integer>();

	@FindBy(id = "twotabsearchtextbox")
	private WebElement searchBar;

	@FindBy(xpath = "//div[contains(@class,'nav-search-submit')]/input[@type='submit'][@value='Go']")
	private WebElement searchButton;

	@FindBy(id = "sort")
	private WebElement sortDropdown;
	
	@FindBy(id = "add-to-cart-button")
	private WebElement addToCartBtn;
	
	@FindBy(id = "nav-cart-count")
	private WebElement cartCount;
	

	private By priceResults = By.xpath(
			"//li[starts-with(@id,'result_')]//following-sibling::span[contains(@class,'a-color-price')][contains(@class,'s-price')]");

	private By lowToHighpriceResults = By.cssSelector(".a-size-base.a-color-price.a-text-bold");

	protected Wait waitUtility = new Wait();

	public amazonSearchPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public WebDriver enterSearchText(String searchText) {
		searchBar.sendKeys(searchText);
		return driver;
	}

	public WebDriver clickSearchButton() {
		(searchButton).click();
		return driver;
	}

	public WebDriver resultsDisplayed() {
		waitUtility.waitForElementToBeVisible(sortDropdown, driver);
		return driver;
	}

	public WebDriver assertFirstFiveResults(String price, String sort) {
		String[] prices = price.split(":");

		if (sort.equals("noSort")) {
			results = priceResults;
		} else if (sort.equals("lowToHigh")) {
			results = lowToHighpriceResults;
		}

		waitUtility.waitForElementToBeVisible(sortDropdown, driver);
		java.util.List<WebElement> ele = driver.findElements(results);
		int size = ele.size();

		if (size > 0) {
			for (int i = 0; i < 5; i++) {
				System.out.println("Actual " + ele.get(i).getText() + " " + "Expected " + prices[i]);
				Assert.assertTrue("Assertion Failed for search result " + (i + 1),
						ele.get(i).getText().contains(prices[i]));
			}

		}

		return driver;
	}

	public WebDriver sortLowToHigh() {
		org.openqa.selenium.support.ui.Select select = new org.openqa.selenium.support.ui.Select(sortDropdown);
		select.selectByVisibleText("Price: Low to High");
		return driver;
	}
	
	public WebDriver addLowestItemToBag() {
		
		waitUtility.waitForElementToBeVisible(sortDropdown, driver);
		java.util.List<WebElement> ele = driver.findElements(priceResults);
		int size = ele.size();
		for(int i=0;i<=size-1;i++) {
			String[] prices = ele.get(i).getText().split("£");
			tMap.put(Float.parseFloat(prices[1]),i);
			
			
		}
		for (Map.Entry<Float, Integer> entry : tMap.entrySet()) {
		     System.out.println("Key: " + entry.getKey() + ". Value: " + entry.getValue());
		}
		Map.Entry<Float, Integer> entry = tMap.entrySet().iterator().next();
		ele.get(entry.getValue()).click();
		waitUtility.waitForElementToBeVisible(addToCartBtn, driver);
		addToCartBtn.click();
		return driver;
	}
	
	public Boolean isItemAddedToBag() {
		waitUtility.waitForElementToBeVisible(cartCount, driver);
		return cartCount.getText().equals("1");
	}

}
