 import{ Given,When,Then} from "@cucumber/cucumber";
 //import{ chromium,Browser, Page } from "playwright"
 import { pageBrowse } from "./hooks/browser";
 import {expect} from "@playwright/test";
 
//  let browser: Browser;
//  let context: any;
//  let page: Page;

 const url= "https://www.practo.com/";

 Given('I navigate to application', async () => { 
          // browser = await chromium.launch({headless: false});
          // context=  await browser.newContext({viewport: {width:1920, height:1000}});
          // page= await context.newPage();

          await pageBrowse.page.goto(url);

    console.log("Step1 passed")
         
   });



 When('I click find hospital', async () => {
        //await page.pause();
        const finddoctor_Button= await pageBrowse.page.getByRole('link', { name: 'Find Doctors', exact: true });
        await finddoctor_Button.click();
           
          console.log("Step2 passed")
         });


         When('I enter hospital', async() => {
          // await page.pause();
          await pageBrowse.page.getByRole('textbox', { name: 'Search doctors, clinics,' }).fill("apollo");
         });

         When('I click hospital',async() =>  {
          const hospital_button= await pageBrowse.page.getByText('AApollo ClinicSarjapur Road');
          await hospital_button.click();
         });

        

         Then('I verify the hospital name', async() => { 
           //await pageBrowse.page.pause();
           //getByRole('heading', { name: 'Apollo clinic, Sarjapur Road' })
           //page.getByText('Apollo clinic, Sarjapur Road', { exact: true })
           //await pageBrowse.page.waitForSelector('Apollo clinic, Sarjapur Road',{timeout: 60000});
           const text= pageBrowse.page.innerText('Apollo clinic, Sarjapur Road');
           console.log(text);
           expect(text).toBe("Apollo clinic, Sarjapur Road");

         });