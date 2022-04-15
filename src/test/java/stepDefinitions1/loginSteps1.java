package stepDefinitions1;

import org.openqa.selenium.By;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class loginSteps1 {
	
	WebDriver driver = loginBaseClass1.driver;

	@When("I enter a username {string}")
	public void i_enter_a_username(String UsernameVal) {
	    WebElement UserName = driver.findElement(By.id("user-name"));
	    UserName.sendKeys(UsernameVal);
	    
	}

	@When("I enter a password {string}")
	public void i_enter_a_password(String PasswordVal) {
	    WebElement Password = driver.findElement(By.name("password"));
	    Password.sendKeys(PasswordVal);
	}

	@When("I click on the login button")
	public void i_click_on_the_login_button() {
		WebElement LoginButton = driver.findElement(By.id("login-button"));
		LoginButton.click();
	    
	}

	@Then("I should have landed on the home page")
	public void i_should_have_landed_on_the_home_page() {
	 WebElement HomePage = driver.findElement(By.xpath("//*[contains(text(), 'Products')]"));
	}

	@Then("I should have received the error {string}")
	public void i_should_have_received_the_error(String ExpectedMessage) {
		WebElement Error = driver.findElement(By.xpath("//*[contains(text(), 'Epic sadface:')]"));
		String ActualMessage = Error.getText();
	    Assert.assertEquals(ActualMessage, ExpectedMessage);
	}

}
