import { AfterAll,Before,After, BeforeAll } from "@cucumber/cucumber";
import{Browser,chromium} from "@playwright/test";
import { pageBrowse } from "./browser";






let browser:Browser;


BeforeAll(async function(){
    console.log("\nExecuting test case.....");
})


AfterAll( async function(){

console.log("\nFinished execution of test case.....");
})


Before(async function(){

    browser = await chromium.launch({headless: false});
    pageBrowse.context=  await browser.newContext({viewport: {width:1920, height:1000}});
    pageBrowse. page= await pageBrowse.context.newPage();
})



After(async function(){
    await pageBrowse.page.close();
    await browser.close();
})