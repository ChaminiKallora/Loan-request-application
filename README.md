# Loan Request Application
This project is based on the EMI calculator. The user can enter the amount, interest rate and the loan term needed and can either,<br/> 
view the calculated capital amount, interest and the loan installment per month
<p align="center">
    OR
</p>
request a loan. - Once the user request a loan, an email will be sent to the user confirming the request and the requested details will be displayed in the next page.

## Technologies
* Angular 10
* .net core 3.1 web api
* MsSql
 
## Configuration

#### step 1
Open the backend solution with visual studio or any .NET development tool

#### step 2
Update the appsettings.json and the Properties/launchSettings.json

#### step 3
Run `dotnet run` from the command line in the backend root folder or build and run the project from the tool

#### step 4
Open the loan-request-application/src/environments/environment.ts file and update the API_URL using the backend url used for the .net API

#### step 5
Run `npm install` from the command line in the frontend root folder

#### step 6
Run `ng serve --open`
