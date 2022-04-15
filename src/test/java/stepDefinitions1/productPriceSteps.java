package stepDefinitions1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.junit.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class productPriceSteps {

	WebDriver driver = loginBaseClass1.driver;
	
	@Given("I have opened the application in browser")
	public void i_have_opened_the_application_in_browser_and_logged_in() throws InterruptedException {
		driver.get("https://www.saucedemo.com/");
		Thread.sleep(5000);
		
	}

	@When("I have logged in successfully")
	public void i_have_logged_in_successfully() {

		WebElement UserName = driver.findElement(By.id("user-name"));
	    UserName.sendKeys("standard_user");
	    
	    WebElement Password = driver.findElement(By.name("password"));
	    Password.sendKeys("secret_sauce");
	    
	    WebElement LoginButton = driver.findElement(By.id("login-button"));
		LoginButton.click();
	}

	
	@Then("I will validate the Product and Price")
	public void i_will_validate_the_Product_and_Price(io.cucumber.datatable.DataTable dataTable) {
	    
		int rows = dataTable.height();
		for(int i=0;i<rows;i++) {
			
			String product = dataTable.cell(i, 0);
			String price = dataTable.cell(i, 1);
			String actual_price = driver.findElement(By.xpath("//div[text()='"+product+"']/following::div[@class='inventory_item_price'][1]")).getText();
			
			Assert.assertEquals(price, actual_price);
		}
		
	}
}
