const { driver } = require("@wdio/globals");
class KhanAcademyTest {
  async Explore_Bookmarks() {
    await driver.pause(5000);
    await $('//android.widget.TextView[@text="Dismiss"]').click();
    const el = await $("~Search"); //Explore
    await el.click();
    await $("//android.widget.Button[5]/android.view.ViewGroup").touchAction("tap");
    await $("//*[@text='Computer science']").touchAction("tap");
    await $("//*[@text='Cryptography']").touchAction("tap");
    await driver.pause(3000);
    await $('//android.widget.Button[@content-desc="Add Bookmark"][1]/android.widget.ImageView').touchAction("tap");
    await $('//*[@resource-id="android:id/button2"]').click();
    await driver.pause(3000);
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Cryptography challenge 101"))');
    await $('(//android.widget.Button[@content-desc="Add Bookmark"])[2]/android.widget.ImageView' ).click();
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Modular arithmetic"))');
    await $('//android.widget.Button[@content-desc="Add Bookmark"][1]').click();
    driver.back();
    await driver.pause(2000);
    await $('//*[@text="Information theory"]').touchAction("tap");
    await driver.pause(2000);
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("Error correction"))');
    await driver.pause(2000);
    await $(`//android.widget.Button[@content-desc="Add Bookmark"][1]`).click();
    await driver.pause(4000);
  }
  async Verifying_Deleting_Bookmarks() {
    await $('//android.view.View[@content-desc="Bookmarks"]').touchAction("tap");
    await driver.pause(2000);
    await expect($('//android.widget.TextView[@text="Ancient cryptography"]')).toExist();
    await driver.pause(1000);
    await expect($('//android.widget.TextView[@text="Cryptography challenge 101"]')).toExist();
    await driver.pause(1000);
    await expect($('//android.widget.TextView[@text="Modular arithmetic"]')).toExist();
    await driver.pause(1000);
    await expect($('//android.widget.TextView[@text="Modern information theory"]')).toExist();
    await driver.pause(1000);
    await $('//android.widget.TextView[@text="Edit"]').click();
    await driver.pause(2000);
    await $('(//android.view.ViewGroup[@content-desc="Select bookmark"])[1]/android.widget.ImageView').click();
    await driver.pause(2000);
    await $('(//android.view.ViewGroup[@content-desc="Select bookmark"])[1]/android.widget.ImageView').click();
    await driver.pause(2000);
    await $('(//android.view.ViewGroup[@content-desc="Select bookmark"])[1]/android.widget.ImageView').click();
    await driver.pause(2000);
    await $('(//android.view.ViewGroup[@content-desc="Select bookmark"])[1]/android.widget.ImageView').click();
    await driver.pause(2000);
    await $('//android.widget.TextView[@text="Delete"]').click();
    await driver.pause(1000);
  }
  async Video_recentLesson() {
    const el = await $("~Search");
    await el.click();
    await el.click();
    await $('//*[@resource-id="Life skills"]').touchAction("tap");
    await $('//*[@resource-id="Financial Literacy"]').touchAction("tap");
    await $('//*[@text="Welcome to Financial Literacy"]').touchAction("tap");
    await $('//*[@text="Welcome to Financial Literacy"]').touchAction("tap");
    await driver.pause(15000);
    driver.back();
    driver.back();
    driver.back();
    driver.back();
    await $('//*[@text="Home"]').click();
    await driver.pause(2000);
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("Recent lessons"))');
    await expect($('//*[@text="Intro to Financial Literacy"]')).toExist();

  }
  async Setings() {
    await driver.pause(6000);
    await $('//android.widget.ImageView[@content-desc="Settings"]').click();
    await $('//*[@text="Download settings"]').click();
    await $('//*[@text="OFF"]').click();
    await $('//*[@text="ON"]').click();
    driver.back();
    await $('//*[@text="App icon"]').click();
    await $('//*[@text="Rainbow"]').click();
    await $('//*[@resource-id="android:id/button1"]').click();
    await driver.startActivity("org.khanacademy.android", "icon.rainbow");
    await driver.pause(10000);
    await driver.startActivity("org.khanacademy.android", "icon.rainbow");
    await driver.pause(10000);
    await $('//android.widget.ImageView[@content-desc="Settings"]').click();
    await $('//*[@text="App icon"]').click();
    await $('//*[@text="Default"]').click();
    await $('//*[@resource-id="android:id/button1"]').click();
    await driver.startActivity("org.khanacademy.android",
    "org.khanacademy.android.ui.library.MainActivity");
  }
  async Arts_humanities() {
    await driver.pause(15000);
    await $('//android.view.View[@content-desc="Explore"]').touchAction("tap");
    await $("//*[@text='Arts and humanities']").touchAction("tap");
    await $("//*[@text='Big History Project']").touchAction("tap");
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Early Humans"))').click();
    await $("//*[@text='READ: Lucy and the Leakeys']").touchAction("tap");
    await driver.pause(3000);
    await $("android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)");
    await driver.back();
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("WATCH: Why Human Evolution Matters"))').click();
    await driver.pause(15000);
    await driver.back();
    await driver.back();
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("The Future"))').click();
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Quiz: Biosphere"))').click();
    await $(`//*[@text="Let's go"]`).click();
    await driver.pause(3000);
    await driver.startActivity("org.khanacademy.android","org.khanacademy.android.ui.library.MainActivity" );
  }
  async AppSwith() {
    await $('//android.view.View[@content-desc="Explore"]').touchAction("tap");
    await $(`//*[@text="Science"]`).click();
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("High school biology"))').click();
    await $( 'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("Evolution"))').click();
    await $(`//*[@text="Ape clarification"]`).click();
    await driver.pause(5000);
    await $('//android.view.ViewGroup[@content-desc="Share"]/android.widget.ImageView').click();
    await $(`//*[@text="Chrome"]`).click();
    await driver.pause(3000);
    await driver.back();
    await driver.switchContext("WEBVIEW_chrome");
    await driver.pause(20000);
    await driver.switchContext("NATIVE_APP");
    await driver.startActivity("org.khanacademy.android","org.khanacademy.android.ui.library.MainActivity");
  }
  async Closing() {
    await driver.pause(2000);
    driver.back();
    await driver.pause(2000);
  }
}
module.exports = new KhanAcademyTest();