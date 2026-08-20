## @unit-finance/unit-node-sdk@0.1.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @unit-finance/unit-node-sdk@0.1.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.s.unit.sh*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountsApi* | [**addAccountOwners**](docs/AccountsApi.md#addaccountowners) | **POST** /accounts/{accountId}/relationships/customers | Add account owners
*AccountsApi* | [**closeAccount**](docs/AccountsApi.md#closeaccount) | **POST** /accounts/{accountId}/close | Close an account
*AccountsApi* | [**createAccount**](docs/AccountsApi.md#createaccount) | **POST** /accounts | Create an account
*AccountsApi* | [**createAccountHold**](docs/AccountsApi.md#createaccounthold) | **POST** /account-holds | Create an account hold
*AccountsApi* | [**freezeAccount**](docs/AccountsApi.md#freezeaccount) | **POST** /accounts/{accountId}/freeze | Freeze an account
*AccountsApi* | [**getAccount**](docs/AccountsApi.md#getaccount) | **GET** /accounts/{accountId} | Get an account by id
*AccountsApi* | [**getAccountBalanceHistory**](docs/AccountsApi.md#getaccountbalancehistory) | **GET** /account-end-of-day | List account end-of-day balances
*AccountsApi* | [**getAccountHoldById**](docs/AccountsApi.md#getaccountholdbyid) | **GET** /account-holds/{id} | Get an account hold by id
*AccountsApi* | [**getAccountLimits**](docs/AccountsApi.md#getaccountlimits) | **GET** /accounts/{accountId}/limits | Get account limits
*AccountsApi* | [**getAvailableDepositProducts**](docs/AccountsApi.md#getavailabledepositproducts) | **GET** /accounts/{accountId}/deposit-products | Get available deposit products
*AccountsApi* | [**listAccountHolds**](docs/AccountsApi.md#listaccountholds) | **GET** /account-holds | List account holds
*AccountsApi* | [**listAccounts**](docs/AccountsApi.md#listaccounts) | **GET** /accounts | List accounts
*AccountsApi* | [**releaseAccountHold**](docs/AccountsApi.md#releaseaccounthold) | **POST** /account-holds/{id}/release | Release an account hold
*AccountsApi* | [**removeAccountOwners**](docs/AccountsApi.md#removeaccountowners) | **DELETE** /accounts/{accountId}/relationships/customers | Remove account owners
*AccountsApi* | [**reopenAccount**](docs/AccountsApi.md#reopenaccount) | **POST** /accounts/{accountId}/reopen | Reopen an account
*AccountsApi* | [**unfreezeAccount**](docs/AccountsApi.md#unfreezeaccount) | **POST** /accounts/{accountId}/unfreeze | Unfreeze an account
*AccountsApi* | [**updateAccount**](docs/AccountsApi.md#updateaccount) | **PATCH** /accounts/{accountId} | Update an account
*AccountsApi* | [**verifyAccount**](docs/AccountsApi.md#verifyaccount) | **POST** /accounts/verify | Verify an account
*ApplicationsApi* | [**cancelApplication**](docs/ApplicationsApi.md#cancelapplication) | **POST** /applications/{id}/cancel | Cancel an application
*ApplicationsApi* | [**checkRegisteredAgentAddress**](docs/ApplicationsApi.md#checkregisteredagentaddress) | **POST** /applications/check-registered-agent-address | Check a registered agent address
*ApplicationsApi* | [**createApplication**](docs/ApplicationsApi.md#createapplication) | **POST** /applications | Create an application
*ApplicationsApi* | [**getById**](docs/ApplicationsApi.md#getbyid) | **GET** /applications/{id} | Get an application
*ApplicationsApi* | [**list**](docs/ApplicationsApi.md#list) | **GET** /applications | List applications
*ApplicationsApi* | [**updateApplication**](docs/ApplicationsApi.md#updateapplication) | **PATCH** /applications/{id} | Update an application
*ApplicationsApi* | [**updateBusinessBeneficialOwner**](docs/ApplicationsApi.md#updatebusinessbeneficialowner) | **PATCH** /beneficial-owner/{id} | Update a business beneficial owner
*FeesApi* | [**createFee**](docs/FeesApi.md#createfee) | **POST** /fees | Create a fee
*FeesApi* | [**reverseFee**](docs/FeesApi.md#reversefee) | **POST** /fees/reverse | Reverse a fee
*PaymentsApi* | [**cancelPayment**](docs/PaymentsApi.md#cancelpayment) | **POST** /payments/{paymentId}/cancel | Cancel a payment
*PaymentsApi* | [**clearAchDebitPayment**](docs/PaymentsApi.md#clearachdebitpayment) | **POST** /payments/{paymentId}/clear | Clear an ACH debit payment
*PaymentsApi* | [**createBatchReleases**](docs/PaymentsApi.md#createbatchreleases) | **POST** /batch-releases | Create batch releases
*PaymentsApi* | [**createPayment**](docs/PaymentsApi.md#createpayment) | **POST** /payments | Create a payment
*PaymentsApi* | [**createRecurringPayment**](docs/PaymentsApi.md#createrecurringpayment) | **POST** /recurring-payments | Create a recurring payment
*PaymentsApi* | [**deleteRecurringPayment**](docs/PaymentsApi.md#deleterecurringpayment) | **DELETE** /recurring-payments/{id} | Delete a recurring payment
*PaymentsApi* | [**disableRecurringPayment**](docs/PaymentsApi.md#disablerecurringpayment) | **POST** /recurring-payments/{id}/disable | Disable a recurring payment
*PaymentsApi* | [**enableRecurringPayment**](docs/PaymentsApi.md#enablerecurringpayment) | **POST** /recurring-payments/{id}/enable | Enable a recurring payment
*PaymentsApi* | [**generateCashDepositBarcode**](docs/PaymentsApi.md#generatecashdepositbarcode) | **POST** /cash-deposits/barcodes | Generate a cash deposit barcode
*PaymentsApi* | [**getCashDepositBarcodeImage**](docs/PaymentsApi.md#getcashdepositbarcodeimage) | **GET** /cash-deposits/barcodes/{barcodeNumber}/image | Get a cash deposit barcode image
*PaymentsApi* | [**getExpectedAchCompletionDate**](docs/PaymentsApi.md#getexpectedachcompletiondate) | **POST** /payments/ach/expected-completion-date | Get expected ACH completion date
*PaymentsApi* | [**getReceivedPayment**](docs/PaymentsApi.md#getreceivedpayment) | **GET** /received-payments/{id} | Get a received payment by id
*PaymentsApi* | [**getRecurringPayment**](docs/PaymentsApi.md#getrecurringpayment) | **GET** /recurring-payments/{id} | Get a recurring payment by id
*PaymentsApi* | [**getWireDrawdown**](docs/PaymentsApi.md#getwiredrawdown) | **GET** /wire-drawdowns/{id} | Get a wire drawdown by id
*PaymentsApi* | [**listReceivedPayments**](docs/PaymentsApi.md#listreceivedpayments) | **GET** /received-payments | List received payments
*PaymentsApi* | [**listRecurringPayments**](docs/PaymentsApi.md#listrecurringpayments) | **GET** /recurring-payments | List recurring payments
*PaymentsApi* | [**listStoreLocations**](docs/PaymentsApi.md#liststorelocations) | **GET** /store-locations | List cash deposit store locations
*PaymentsApi* | [**listWireDrawdowns**](docs/PaymentsApi.md#listwiredrawdowns) | **GET** /wire-drawdowns | List wire drawdowns
*PaymentsApi* | [**sendDrawdownPayment**](docs/PaymentsApi.md#senddrawdownpayment) | **POST** /wire-drawdowns/{id}/send | Send a drawdown payment
*PaymentsApi* | [**updatePayment**](docs/PaymentsApi.md#updatepayment) | **PATCH** /payments/{paymentId} | Update a payment
*PaymentsApi* | [**updateReceivedPayment**](docs/PaymentsApi.md#updatereceivedpayment) | **PATCH** /received-payments/{id} | Update a received payment


### Documentation For Models

 - [ACHPayment](docs/ACHPayment.md)
 - [ACHPaymentAttributes](docs/ACHPaymentAttributes.md)
 - [ACHPaymentRelationships](docs/ACHPaymentRelationships.md)
 - [ACHReceivedPayment](docs/ACHReceivedPayment.md)
 - [ACHReceivedPaymentAttributes](docs/ACHReceivedPaymentAttributes.md)
 - [ACHReceivedPaymentRelationships](docs/ACHReceivedPaymentRelationships.md)
 - [AccountEndOfDay](docs/AccountEndOfDay.md)
 - [AccountEndOfDayAttributes](docs/AccountEndOfDayAttributes.md)
 - [AccountEndOfDayRelationships](docs/AccountEndOfDayRelationships.md)
 - [AccountHold](docs/AccountHold.md)
 - [AccountHoldAttributes](docs/AccountHoldAttributes.md)
 - [AddAccountOwners200Response](docs/AddAccountOwners200Response.md)
 - [AddAccountOwnersRequest](docs/AddAccountOwnersRequest.md)
 - [AddressType](docs/AddressType.md)
 - [AnnualIncomeType](docs/AnnualIncomeType.md)
 - [AnnualRevenueType](docs/AnnualRevenueType.md)
 - [ApplicationDocument](docs/ApplicationDocument.md)
 - [ApplicationDocumentAttributes](docs/ApplicationDocumentAttributes.md)
 - [BatchRelease](docs/BatchRelease.md)
 - [BatchReleaseAttributes](docs/BatchReleaseAttributes.md)
 - [BatchReleaseRelationships](docs/BatchReleaseRelationships.md)
 - [BeneficialOwner](docs/BeneficialOwner.md)
 - [BeneficialOwnerAttributes](docs/BeneficialOwnerAttributes.md)
 - [BeneficialOwnerRequestType](docs/BeneficialOwnerRequestType.md)
 - [BeneficialOwnerType](docs/BeneficialOwnerType.md)
 - [BookPayment](docs/BookPayment.md)
 - [BookPaymentAttributes](docs/BookPaymentAttributes.md)
 - [BookPaymentRelationships](docs/BookPaymentRelationships.md)
 - [BusinessAnnualRevenueType](docs/BusinessAnnualRevenueType.md)
 - [BusinessApplication](docs/BusinessApplication.md)
 - [BusinessApplicationAttributes](docs/BusinessApplicationAttributes.md)
 - [BusinessApplicationRelationships](docs/BusinessApplicationRelationships.md)
 - [BusinessContactType](docs/BusinessContactType.md)
 - [BusinessNumberOfEmployeesType](docs/BusinessNumberOfEmployeesType.md)
 - [BusinessVerticalType](docs/BusinessVerticalType.md)
 - [CancelApplication201Response](docs/CancelApplication201Response.md)
 - [CancelApplicationData](docs/CancelApplicationData.md)
 - [CancelApplicationDataAttributes](docs/CancelApplicationDataAttributes.md)
 - [CancelApplicationRequest](docs/CancelApplicationRequest.md)
 - [CancelPayment200Response](docs/CancelPayment200Response.md)
 - [CancelPayment200ResponseData](docs/CancelPayment200ResponseData.md)
 - [CashDepositBarcode](docs/CashDepositBarcode.md)
 - [CashDepositBarcodeAttributes](docs/CashDepositBarcodeAttributes.md)
 - [CashDepositBarcodeRelationships](docs/CashDepositBarcodeRelationships.md)
 - [CashFlowType](docs/CashFlowType.md)
 - [CheckRegisteredAgentAddress200Response](docs/CheckRegisteredAgentAddress200Response.md)
 - [CheckRegisteredAgentAddress200ResponseData](docs/CheckRegisteredAgentAddress200ResponseData.md)
 - [CheckRegisteredAgentAddress200ResponseDataAttributes](docs/CheckRegisteredAgentAddress200ResponseDataAttributes.md)
 - [CheckRegisteredAgentAddressData](docs/CheckRegisteredAgentAddressData.md)
 - [CheckRegisteredAgentAddressDataAttributes](docs/CheckRegisteredAgentAddressDataAttributes.md)
 - [CheckRegisteredAgentAddressRequest](docs/CheckRegisteredAgentAddressRequest.md)
 - [CheckRegisteredAgentAddressType](docs/CheckRegisteredAgentAddressType.md)
 - [ClearAchDebitPayment200Response](docs/ClearAchDebitPayment200Response.md)
 - [CloseAccountRequest](docs/CloseAccountRequest.md)
 - [CloseCreditAccountData](docs/CloseCreditAccountData.md)
 - [CloseCreditAccountDataAttributes](docs/CloseCreditAccountDataAttributes.md)
 - [CloseCreditAccountRequest](docs/CloseCreditAccountRequest.md)
 - [CloseDepositAccountData](docs/CloseDepositAccountData.md)
 - [CloseDepositAccountDataAttributes](docs/CloseDepositAccountDataAttributes.md)
 - [CloseDepositAccountRequest](docs/CloseDepositAccountRequest.md)
 - [CloseWalletData](docs/CloseWalletData.md)
 - [CloseWalletDataAttributes](docs/CloseWalletDataAttributes.md)
 - [CloseWalletRequest](docs/CloseWalletRequest.md)
 - [CoordinatesType](docs/CoordinatesType.md)
 - [CounterpartyType](docs/CounterpartyType.md)
 - [CreateABookPaymentData](docs/CreateABookPaymentData.md)
 - [CreateABookPaymentDataAttributes](docs/CreateABookPaymentDataAttributes.md)
 - [CreateABookPaymentDataRelationships](docs/CreateABookPaymentDataRelationships.md)
 - [CreateABookPaymentRequest](docs/CreateABookPaymentRequest.md)
 - [CreateACHPaymentData](docs/CreateACHPaymentData.md)
 - [CreateACHPaymentDataAttributes](docs/CreateACHPaymentDataAttributes.md)
 - [CreateACHPaymentExistingCounterpartyData](docs/CreateACHPaymentExistingCounterpartyData.md)
 - [CreateACHPaymentExistingCounterpartyDataAttributes](docs/CreateACHPaymentExistingCounterpartyDataAttributes.md)
 - [CreateACHPaymentExistingCounterpartyDataRelationships](docs/CreateACHPaymentExistingCounterpartyDataRelationships.md)
 - [CreateACHPaymentExistingCounterpartyRequest](docs/CreateACHPaymentExistingCounterpartyRequest.md)
 - [CreateACHPaymentPlaidTokenData](docs/CreateACHPaymentPlaidTokenData.md)
 - [CreateACHPaymentPlaidTokenDataAttributes](docs/CreateACHPaymentPlaidTokenDataAttributes.md)
 - [CreateACHPaymentPlaidTokenRequest](docs/CreateACHPaymentPlaidTokenRequest.md)
 - [CreateACHPaymentRequest](docs/CreateACHPaymentRequest.md)
 - [CreateAWirePaymentData](docs/CreateAWirePaymentData.md)
 - [CreateAWirePaymentDataAttributes](docs/CreateAWirePaymentDataAttributes.md)
 - [CreateAWirePaymentRequest](docs/CreateAWirePaymentRequest.md)
 - [CreateAccount201Response](docs/CreateAccount201Response.md)
 - [CreateAccountHold201Response](docs/CreateAccountHold201Response.md)
 - [CreateAccountHoldData](docs/CreateAccountHoldData.md)
 - [CreateAccountHoldDataAttributes](docs/CreateAccountHoldDataAttributes.md)
 - [CreateAccountHoldRequest](docs/CreateAccountHoldRequest.md)
 - [CreateAccountRequest](docs/CreateAccountRequest.md)
 - [CreateApplication201Response](docs/CreateApplication201Response.md)
 - [CreateApplication201ResponseIncludedInner](docs/CreateApplication201ResponseIncludedInner.md)
 - [CreateApplicationRequest](docs/CreateApplicationRequest.md)
 - [CreateBatchReleases201Response](docs/CreateBatchReleases201Response.md)
 - [CreateBatchReleasesData](docs/CreateBatchReleasesData.md)
 - [CreateBatchReleasesDataAttributes](docs/CreateBatchReleasesDataAttributes.md)
 - [CreateBatchReleasesRequest](docs/CreateBatchReleasesRequest.md)
 - [CreateBusinessApplicationData](docs/CreateBusinessApplicationData.md)
 - [CreateBusinessApplicationDataAttributes](docs/CreateBusinessApplicationDataAttributes.md)
 - [CreateBusinessApplicationRequest](docs/CreateBusinessApplicationRequest.md)
 - [CreateCreditAccountData](docs/CreateCreditAccountData.md)
 - [CreateCreditAccountDataAttributes](docs/CreateCreditAccountDataAttributes.md)
 - [CreateCreditAccountRequest](docs/CreateCreditAccountRequest.md)
 - [CreateDepositAccountData](docs/CreateDepositAccountData.md)
 - [CreateDepositAccountDataAttributes](docs/CreateDepositAccountDataAttributes.md)
 - [CreateDepositAccountDataRelationships](docs/CreateDepositAccountDataRelationships.md)
 - [CreateDepositAccountRequest](docs/CreateDepositAccountRequest.md)
 - [CreateFee201Response](docs/CreateFee201Response.md)
 - [CreateFeeData](docs/CreateFeeData.md)
 - [CreateFeeDataAttributes](docs/CreateFeeDataAttributes.md)
 - [CreateFeeDataRelationships](docs/CreateFeeDataRelationships.md)
 - [CreateFeeRequest](docs/CreateFeeRequest.md)
 - [CreateIndividualApplicationData](docs/CreateIndividualApplicationData.md)
 - [CreateIndividualApplicationDataAttributes](docs/CreateIndividualApplicationDataAttributes.md)
 - [CreateIndividualApplicationRequest](docs/CreateIndividualApplicationRequest.md)
 - [CreatePayment201Response](docs/CreatePayment201Response.md)
 - [CreatePayment201ResponseData](docs/CreatePayment201ResponseData.md)
 - [CreatePaymentRequest](docs/CreatePaymentRequest.md)
 - [CreateRecurringCreditACHPaymentData](docs/CreateRecurringCreditACHPaymentData.md)
 - [CreateRecurringCreditACHPaymentDataAttributes](docs/CreateRecurringCreditACHPaymentDataAttributes.md)
 - [CreateRecurringCreditACHPaymentRequest](docs/CreateRecurringCreditACHPaymentRequest.md)
 - [CreateRecurringCreditBookPaymentData](docs/CreateRecurringCreditBookPaymentData.md)
 - [CreateRecurringCreditBookPaymentDataAttributes](docs/CreateRecurringCreditBookPaymentDataAttributes.md)
 - [CreateRecurringCreditBookPaymentRequest](docs/CreateRecurringCreditBookPaymentRequest.md)
 - [CreateRecurringDebitACHPaymentData](docs/CreateRecurringDebitACHPaymentData.md)
 - [CreateRecurringDebitACHPaymentDataAttributes](docs/CreateRecurringDebitACHPaymentDataAttributes.md)
 - [CreateRecurringDebitACHPaymentRequest](docs/CreateRecurringDebitACHPaymentRequest.md)
 - [CreateRecurringPayment201Response](docs/CreateRecurringPayment201Response.md)
 - [CreateRecurringPaymentRequest](docs/CreateRecurringPaymentRequest.md)
 - [CreateScheduleType](docs/CreateScheduleType.md)
 - [CreateSoleProprietorApplicationData](docs/CreateSoleProprietorApplicationData.md)
 - [CreateSoleProprietorApplicationDataAttributes](docs/CreateSoleProprietorApplicationDataAttributes.md)
 - [CreateSoleProprietorApplicationRequest](docs/CreateSoleProprietorApplicationRequest.md)
 - [CreateWalletData](docs/CreateWalletData.md)
 - [CreateWalletDataAttributes](docs/CreateWalletDataAttributes.md)
 - [CreateWalletRequest](docs/CreateWalletRequest.md)
 - [CreditAccount](docs/CreditAccount.md)
 - [CreditAccountAttributes](docs/CreditAccountAttributes.md)
 - [CreditAccountRelationships](docs/CreditAccountRelationships.md)
 - [DepositAccount](docs/DepositAccount.md)
 - [DepositAccountAttributes](docs/DepositAccountAttributes.md)
 - [DepositAccountRelationships](docs/DepositAccountRelationships.md)
 - [DeviceFingerprintType](docs/DeviceFingerprintType.md)
 - [ErrorDocument](docs/ErrorDocument.md)
 - [ErrorDocumentErrorsInner](docs/ErrorDocumentErrorsInner.md)
 - [ErrorDocumentErrorsInnerSource](docs/ErrorDocumentErrorsInnerSource.md)
 - [Fee](docs/Fee.md)
 - [FeeAttributes](docs/FeeAttributes.md)
 - [FeeRelationships](docs/FeeRelationships.md)
 - [FeeReversal](docs/FeeReversal.md)
 - [FeeReversalAttributes](docs/FeeReversalAttributes.md)
 - [FeeReversalRelationships](docs/FeeReversalRelationships.md)
 - [FreezeAccountRequest](docs/FreezeAccountRequest.md)
 - [FreezeCreditAccountData](docs/FreezeCreditAccountData.md)
 - [FreezeCreditAccountRequest](docs/FreezeCreditAccountRequest.md)
 - [FreezeDepositAccountData](docs/FreezeDepositAccountData.md)
 - [FreezeDepositAccountDataAttributes](docs/FreezeDepositAccountDataAttributes.md)
 - [FreezeDepositAccountRequest](docs/FreezeDepositAccountRequest.md)
 - [FreezeWalletData](docs/FreezeWalletData.md)
 - [FreezeWalletDataAttributes](docs/FreezeWalletDataAttributes.md)
 - [FreezeWalletRequest](docs/FreezeWalletRequest.md)
 - [FullNameType](docs/FullNameType.md)
 - [GenerateBarcodeData](docs/GenerateBarcodeData.md)
 - [GenerateBarcodeDataAttributes](docs/GenerateBarcodeDataAttributes.md)
 - [GenerateBarcodeDataRelationships](docs/GenerateBarcodeDataRelationships.md)
 - [GenerateCashDepositBarcode200Response](docs/GenerateCashDepositBarcode200Response.md)
 - [GenerateCashDepositBarcodeRequest](docs/GenerateCashDepositBarcodeRequest.md)
 - [GetAccountBalanceHistory200Response](docs/GetAccountBalanceHistory200Response.md)
 - [GetAccountLimits200Response](docs/GetAccountLimits200Response.md)
 - [GetAccountLimits200ResponseData](docs/GetAccountLimits200ResponseData.md)
 - [GetAvailableDepositProducts200Response](docs/GetAvailableDepositProducts200Response.md)
 - [GetAvailableDepositProducts200ResponseDataInner](docs/GetAvailableDepositProducts200ResponseDataInner.md)
 - [GetAvailableDepositProducts200ResponseDataInnerAttributes](docs/GetAvailableDepositProducts200ResponseDataInnerAttributes.md)
 - [GetExpectedACHCompletionDateData](docs/GetExpectedACHCompletionDateData.md)
 - [GetExpectedACHCompletionDateDataAttributes](docs/GetExpectedACHCompletionDateDataAttributes.md)
 - [GetExpectedAchCompletionDate200Response](docs/GetExpectedAchCompletionDate200Response.md)
 - [GetExpectedAchCompletionDate200ResponseData](docs/GetExpectedAchCompletionDate200ResponseData.md)
 - [GetExpectedAchCompletionDateRequest](docs/GetExpectedAchCompletionDateRequest.md)
 - [GetReceivedPayment200Response](docs/GetReceivedPayment200Response.md)
 - [GetWireDrawdown200Response](docs/GetWireDrawdown200Response.md)
 - [IndividualApplication](docs/IndividualApplication.md)
 - [IndividualApplicationAttributes](docs/IndividualApplicationAttributes.md)
 - [IndividualApplicationRelationships](docs/IndividualApplicationRelationships.md)
 - [IndustryType](docs/IndustryType.md)
 - [List200Response](docs/List200Response.md)
 - [List200ResponseDataInner](docs/List200ResponseDataInner.md)
 - [ListAccountHolds200Response](docs/ListAccountHolds200Response.md)
 - [ListAccounts200Response](docs/ListAccounts200Response.md)
 - [ListAccounts200ResponseDataInner](docs/ListAccounts200ResponseDataInner.md)
 - [ListReceivedPayments200Response](docs/ListReceivedPayments200Response.md)
 - [ListRecurringPayments200Response](docs/ListRecurringPayments200Response.md)
 - [ListRecurringPayments200ResponseDataInner](docs/ListRecurringPayments200ResponseDataInner.md)
 - [ListStoreLocations200Response](docs/ListStoreLocations200Response.md)
 - [ListWireDrawdowns200Response](docs/ListWireDrawdowns200Response.md)
 - [Meta](docs/Meta.md)
 - [MetaPagination](docs/MetaPagination.md)
 - [NumberOfEmployeesType](docs/NumberOfEmployeesType.md)
 - [OccupationType](docs/OccupationType.md)
 - [OfficerRequestType](docs/OfficerRequestType.md)
 - [OfficerType](docs/OfficerType.md)
 - [PhoneType](docs/PhoneType.md)
 - [RecurringCreditACHPayment](docs/RecurringCreditACHPayment.md)
 - [RecurringCreditACHPaymentAttributes](docs/RecurringCreditACHPaymentAttributes.md)
 - [RecurringCreditACHPaymentRelationships](docs/RecurringCreditACHPaymentRelationships.md)
 - [RecurringCreditBookPayment](docs/RecurringCreditBookPayment.md)
 - [RecurringCreditBookPaymentAttributes](docs/RecurringCreditBookPaymentAttributes.md)
 - [RecurringCreditBookPaymentRelationships](docs/RecurringCreditBookPaymentRelationships.md)
 - [RecurringDebitACHPayment](docs/RecurringDebitACHPayment.md)
 - [Relationship](docs/Relationship.md)
 - [RelationshipData](docs/RelationshipData.md)
 - [ReleaseAccountHoldData](docs/ReleaseAccountHoldData.md)
 - [ReleaseAccountHoldDataAttributes](docs/ReleaseAccountHoldDataAttributes.md)
 - [ReleaseAccountHoldRequest](docs/ReleaseAccountHoldRequest.md)
 - [RemoveAccountOwnersRequest](docs/RemoveAccountOwnersRequest.md)
 - [ReopenAccount200Response](docs/ReopenAccount200Response.md)
 - [ReopenAccount200ResponseData](docs/ReopenAccount200ResponseData.md)
 - [RequestedProductType](docs/RequestedProductType.md)
 - [ResourceIdentifier](docs/ResourceIdentifier.md)
 - [ReverseFee201Response](docs/ReverseFee201Response.md)
 - [ReverseFeeData](docs/ReverseFeeData.md)
 - [ReverseFeeDataAttributes](docs/ReverseFeeDataAttributes.md)
 - [ReverseFeeDataRelationships](docs/ReverseFeeDataRelationships.md)
 - [ReverseFeeRequest](docs/ReverseFeeRequest.md)
 - [ScheduleType](docs/ScheduleType.md)
 - [SendDrawdownPayment200Response](docs/SendDrawdownPayment200Response.md)
 - [SendDrawdownPaymentData](docs/SendDrawdownPaymentData.md)
 - [SendDrawdownPaymentDataAttributes](docs/SendDrawdownPaymentDataAttributes.md)
 - [SendDrawdownPaymentRequest](docs/SendDrawdownPaymentRequest.md)
 - [SoleProprietorAnnualRevenueType](docs/SoleProprietorAnnualRevenueType.md)
 - [SoleProprietorNumberOfEmployeesType](docs/SoleProprietorNumberOfEmployeesType.md)
 - [SourceOfIncomeType](docs/SourceOfIncomeType.md)
 - [StoreLocation](docs/StoreLocation.md)
 - [StoreLocationAttributes](docs/StoreLocationAttributes.md)
 - [ToManyRelationship](docs/ToManyRelationship.md)
 - [TotalAccruedInterestType](docs/TotalAccruedInterestType.md)
 - [UpdateACHPaymentData](docs/UpdateACHPaymentData.md)
 - [UpdateACHPaymentDataAttributes](docs/UpdateACHPaymentDataAttributes.md)
 - [UpdateACHPaymentRequest](docs/UpdateACHPaymentRequest.md)
 - [UpdateAccountRequest](docs/UpdateAccountRequest.md)
 - [UpdateApplicationRequest](docs/UpdateApplicationRequest.md)
 - [UpdateBookPaymentData](docs/UpdateBookPaymentData.md)
 - [UpdateBookPaymentDataAttributes](docs/UpdateBookPaymentDataAttributes.md)
 - [UpdateBookPaymentRequest](docs/UpdateBookPaymentRequest.md)
 - [UpdateBusinessApplicationData](docs/UpdateBusinessApplicationData.md)
 - [UpdateBusinessApplicationDataAttributes](docs/UpdateBusinessApplicationDataAttributes.md)
 - [UpdateBusinessApplicationRequest](docs/UpdateBusinessApplicationRequest.md)
 - [UpdateBusinessBeneficialOwner201Response](docs/UpdateBusinessBeneficialOwner201Response.md)
 - [UpdateBusinessBeneficialOwnerData](docs/UpdateBusinessBeneficialOwnerData.md)
 - [UpdateBusinessBeneficialOwnerDataAttributes](docs/UpdateBusinessBeneficialOwnerDataAttributes.md)
 - [UpdateBusinessBeneficialOwnerDataRelationships](docs/UpdateBusinessBeneficialOwnerDataRelationships.md)
 - [UpdateBusinessBeneficialOwnerRequest](docs/UpdateBusinessBeneficialOwnerRequest.md)
 - [UpdateBusinessOfficerData](docs/UpdateBusinessOfficerData.md)
 - [UpdateBusinessOfficerDataAttributes](docs/UpdateBusinessOfficerDataAttributes.md)
 - [UpdateBusinessOfficerRequest](docs/UpdateBusinessOfficerRequest.md)
 - [UpdateCreditAccountData](docs/UpdateCreditAccountData.md)
 - [UpdateCreditAccountDataAttributes](docs/UpdateCreditAccountDataAttributes.md)
 - [UpdateCreditAccountRequest](docs/UpdateCreditAccountRequest.md)
 - [UpdateDepositAccountData](docs/UpdateDepositAccountData.md)
 - [UpdateDepositAccountDataAttributes](docs/UpdateDepositAccountDataAttributes.md)
 - [UpdateDepositAccountRequest](docs/UpdateDepositAccountRequest.md)
 - [UpdateIndividualApplicationData](docs/UpdateIndividualApplicationData.md)
 - [UpdateIndividualApplicationDataAttributes](docs/UpdateIndividualApplicationDataAttributes.md)
 - [UpdateIndividualApplicationRequest](docs/UpdateIndividualApplicationRequest.md)
 - [UpdatePayment200Response](docs/UpdatePayment200Response.md)
 - [UpdatePayment200ResponseData](docs/UpdatePayment200ResponseData.md)
 - [UpdatePaymentRequest](docs/UpdatePaymentRequest.md)
 - [UpdateReceivedPayment200Response](docs/UpdateReceivedPayment200Response.md)
 - [UpdateReceivedPaymentData](docs/UpdateReceivedPaymentData.md)
 - [UpdateReceivedPaymentRequest](docs/UpdateReceivedPaymentRequest.md)
 - [UpdateSoleProprietorApplicationData](docs/UpdateSoleProprietorApplicationData.md)
 - [UpdateSoleProprietorApplicationDataAttributes](docs/UpdateSoleProprietorApplicationDataAttributes.md)
 - [UpdateSoleProprietorApplicationRequest](docs/UpdateSoleProprietorApplicationRequest.md)
 - [UpdateWalletData](docs/UpdateWalletData.md)
 - [UpdateWalletDataAttributes](docs/UpdateWalletDataAttributes.md)
 - [UpdateWalletRequest](docs/UpdateWalletRequest.md)
 - [VerifyAccount200Response](docs/VerifyAccount200Response.md)
 - [VerifyAccount200ResponseData](docs/VerifyAccount200ResponseData.md)
 - [VerifyAccount200ResponseDataAccount](docs/VerifyAccount200ResponseDataAccount.md)
 - [VerifyAccountData](docs/VerifyAccountData.md)
 - [VerifyAccountDataAttributes](docs/VerifyAccountDataAttributes.md)
 - [VerifyAccountRequest](docs/VerifyAccountRequest.md)
 - [WalletAccount](docs/WalletAccount.md)
 - [WalletAccountAttributes](docs/WalletAccountAttributes.md)
 - [WireCounterpartyType](docs/WireCounterpartyType.md)
 - [WireDrawdown](docs/WireDrawdown.md)
 - [WireDrawdownAttributes](docs/WireDrawdownAttributes.md)
 - [WireDrawdownRelationships](docs/WireDrawdownRelationships.md)
 - [WirePayment](docs/WirePayment.md)
 - [WirePaymentAttributes](docs/WirePaymentAttributes.md)
 - [WirePaymentRelationships](docs/WirePaymentRelationships.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="bearerAuth"></a>
### bearerAuth

- **Type**: Bearer authentication (JWT)

