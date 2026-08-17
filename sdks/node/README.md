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


### Documentation For Models

 - [AccountEndOfDay](docs/AccountEndOfDay.md)
 - [AccountEndOfDayAttributes](docs/AccountEndOfDayAttributes.md)
 - [AccountEndOfDayRelationships](docs/AccountEndOfDayRelationships.md)
 - [AccountHold](docs/AccountHold.md)
 - [AccountHoldAttributes](docs/AccountHoldAttributes.md)
 - [AddAccountOwners200Response](docs/AddAccountOwners200Response.md)
 - [AddAccountOwnersRequest](docs/AddAccountOwnersRequest.md)
 - [AddAccountOwnersRequestData](docs/AddAccountOwnersRequestData.md)
 - [AddAccountOwnersRequestDataAttributes](docs/AddAccountOwnersRequestDataAttributes.md)
 - [AddressType](docs/AddressType.md)
 - [AnnualIncomeType](docs/AnnualIncomeType.md)
 - [AnnualRevenueType](docs/AnnualRevenueType.md)
 - [ApplicationDocument](docs/ApplicationDocument.md)
 - [ApplicationDocumentAttributes](docs/ApplicationDocumentAttributes.md)
 - [BeneficialOwner](docs/BeneficialOwner.md)
 - [BeneficialOwnerAttributes](docs/BeneficialOwnerAttributes.md)
 - [BeneficialOwnerRequestType](docs/BeneficialOwnerRequestType.md)
 - [BeneficialOwnerType](docs/BeneficialOwnerType.md)
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
 - [CashFlowType](docs/CashFlowType.md)
 - [CheckRegisteredAgentAddress200Response](docs/CheckRegisteredAgentAddress200Response.md)
 - [CheckRegisteredAgentAddress200ResponseData](docs/CheckRegisteredAgentAddress200ResponseData.md)
 - [CheckRegisteredAgentAddress200ResponseDataAttributes](docs/CheckRegisteredAgentAddress200ResponseDataAttributes.md)
 - [CheckRegisteredAgentAddressData](docs/CheckRegisteredAgentAddressData.md)
 - [CheckRegisteredAgentAddressDataAttributes](docs/CheckRegisteredAgentAddressDataAttributes.md)
 - [CheckRegisteredAgentAddressRequest](docs/CheckRegisteredAgentAddressRequest.md)
 - [CheckRegisteredAgentAddressType](docs/CheckRegisteredAgentAddressType.md)
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
 - [CreateAccount201Response](docs/CreateAccount201Response.md)
 - [CreateAccountHold201Response](docs/CreateAccountHold201Response.md)
 - [CreateAccountHoldData](docs/CreateAccountHoldData.md)
 - [CreateAccountHoldDataAttributes](docs/CreateAccountHoldDataAttributes.md)
 - [CreateAccountHoldRequest](docs/CreateAccountHoldRequest.md)
 - [CreateAccountRequest](docs/CreateAccountRequest.md)
 - [CreateApplication201Response](docs/CreateApplication201Response.md)
 - [CreateApplication201ResponseIncludedInner](docs/CreateApplication201ResponseIncludedInner.md)
 - [CreateApplicationRequest](docs/CreateApplicationRequest.md)
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
 - [GetAccountBalanceHistory200Response](docs/GetAccountBalanceHistory200Response.md)
 - [GetAccountLimits200Response](docs/GetAccountLimits200Response.md)
 - [GetAccountLimits200ResponseData](docs/GetAccountLimits200ResponseData.md)
 - [GetAvailableDepositProducts200Response](docs/GetAvailableDepositProducts200Response.md)
 - [GetAvailableDepositProducts200ResponseDataInner](docs/GetAvailableDepositProducts200ResponseDataInner.md)
 - [GetAvailableDepositProducts200ResponseDataInnerAttributes](docs/GetAvailableDepositProducts200ResponseDataInnerAttributes.md)
 - [IndividualApplication](docs/IndividualApplication.md)
 - [IndividualApplicationAttributes](docs/IndividualApplicationAttributes.md)
 - [IndividualApplicationRelationships](docs/IndividualApplicationRelationships.md)
 - [IndustryType](docs/IndustryType.md)
 - [List200Response](docs/List200Response.md)
 - [List200ResponseDataInner](docs/List200ResponseDataInner.md)
 - [ListAccountHolds200Response](docs/ListAccountHolds200Response.md)
 - [ListAccounts200Response](docs/ListAccounts200Response.md)
 - [ListAccounts200ResponseDataInner](docs/ListAccounts200ResponseDataInner.md)
 - [Meta](docs/Meta.md)
 - [MetaPagination](docs/MetaPagination.md)
 - [NumberOfEmployeesType](docs/NumberOfEmployeesType.md)
 - [OccupationType](docs/OccupationType.md)
 - [OfficerRequestType](docs/OfficerRequestType.md)
 - [OfficerType](docs/OfficerType.md)
 - [PhoneType](docs/PhoneType.md)
 - [Relationship](docs/Relationship.md)
 - [RelationshipData](docs/RelationshipData.md)
 - [ReleaseAccountHoldData](docs/ReleaseAccountHoldData.md)
 - [ReleaseAccountHoldDataAttributes](docs/ReleaseAccountHoldDataAttributes.md)
 - [ReleaseAccountHoldRequest](docs/ReleaseAccountHoldRequest.md)
 - [RemoveAccountOwnersRequest](docs/RemoveAccountOwnersRequest.md)
 - [RemoveAccountOwnersRequestData](docs/RemoveAccountOwnersRequestData.md)
 - [RemoveAccountOwnersRequestDataAttributes](docs/RemoveAccountOwnersRequestDataAttributes.md)
 - [ReopenAccount200Response](docs/ReopenAccount200Response.md)
 - [ReopenAccount200ResponseData](docs/ReopenAccount200ResponseData.md)
 - [RequestedProductType](docs/RequestedProductType.md)
 - [ResourceIdentifier](docs/ResourceIdentifier.md)
 - [ReverseFee201Response](docs/ReverseFee201Response.md)
 - [ReverseFeeData](docs/ReverseFeeData.md)
 - [ReverseFeeDataAttributes](docs/ReverseFeeDataAttributes.md)
 - [ReverseFeeDataRelationships](docs/ReverseFeeDataRelationships.md)
 - [ReverseFeeRequest](docs/ReverseFeeRequest.md)
 - [SoleProprietorAnnualRevenueType](docs/SoleProprietorAnnualRevenueType.md)
 - [SoleProprietorNumberOfEmployeesType](docs/SoleProprietorNumberOfEmployeesType.md)
 - [SourceOfIncomeType](docs/SourceOfIncomeType.md)
 - [ToManyRelationship](docs/ToManyRelationship.md)
 - [TotalAccruedInterestType](docs/TotalAccruedInterestType.md)
 - [UpdateAccountRequest](docs/UpdateAccountRequest.md)
 - [UpdateApplicationRequest](docs/UpdateApplicationRequest.md)
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


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="bearerAuth"></a>
### bearerAuth

- **Type**: Bearer authentication (JWT)

