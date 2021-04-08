# Loan Request Application
This project is based on the EMI calculator. Once the user entered the amount, interest rate and the loan term, the user can either 
* view the calculated capital amount, interest and the loan installment per month.
* request a loan. - Once the user request a loan, an email will be sent to the user confirming the request and the requested details will be displayed in the next page.

## Technologies
* Angular 10
* .NET 3.0
* MsSql
 
## Configuration

#### step 1
Open the backend solution with visula studio

#### step 2
Update the appsettings.json and the Properties/launchSettings.json

#### step 3
Run `dotnet run` in the terminal or build and run the project

#### step 4
Open the loan-request-application/src/environments/environment.ts file and update the API_URL to the backend url used for the .net API

#### step 5
Open a terminal inside the frontend directory

#### step 6
Run `npm install`

#### step 7
Run `ng serve --open`
